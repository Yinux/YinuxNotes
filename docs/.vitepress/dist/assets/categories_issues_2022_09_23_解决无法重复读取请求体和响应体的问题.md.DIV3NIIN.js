import{_ as l}from"./chunks/ArticleMetadata.B3-IGLbF.js";import{_ as h,D as k,c as r,I as d,w as g,j as n,a as A,a6 as y,o as p,b as o,e as D}from"./chunks/framework.DMU8tcfM.js";import"./chunks/theme.B7wFqaW6.js";const q=JSON.parse('{"title":"解决无法重复读取请求体和响应体的问题","description":"","frontmatter":{"title":"解决无法重复读取请求体和响应体的问题","author":"查尔斯","date":"2022/09/23 20:55","categories":["Bug万象集"],"tags":["Java","Spring Boot","过滤器"]},"headers":[],"relativePath":"categories/issues/2022/09/23/解决无法重复读取请求体和响应体的问题.md","filePath":"categories/issues/2022/09/23/解决无法重复读取请求体和响应体的问题.md","lastUpdated":1720883892000}'),c={name:"categories/issues/2022/09/23/解决无法重复读取请求体和响应体的问题.md"},C=n("h1",{id:"解决无法重复读取请求体和响应体的问题",tabindex:"-1"},[A("解决无法重复读取请求体和响应体的问题 "),n("a",{class:"header-anchor",href:"#解决无法重复读取请求体和响应体的问题","aria-label":'Permalink to "解决无法重复读取请求体和响应体的问题"'},"​")],-1),B=y(`<h2 id="项目场景" tabindex="-1">项目场景 <a class="header-anchor" href="#项目场景" aria-label="Permalink to &quot;项目场景&quot;">​</a></h2><p><strong>C：</strong> 这两天实现了一个操作日志功能，需求是要记录指定操作的请求 URL，请求方式、请求头、请求体、响应码、响应头、响应体、请求耗时、操作人、操作IP、操作地址等信息。</p><p>考虑了几种方案，结合以前的经验，排掉了 AOP，综合评估后这次采用的是 Spring 拦截器的方式来记录，大体的实现流程是：</p><ol><li>提供一个 <code>@Log</code> 注解</li><li>在需要记录操作日志的接口类及方法上添加 <code>@Log</code> 注解，指定好资源名称和操作类型（具体为什么要在类和方法上都加，是考虑复用操作的资源名称）</li><li>提供一个拦截器，在拦截器中判断当前 Handler 是否存在 <code>@Log</code> 注解</li><li>存在该注解，就在 <code>preHandle()</code> 中开始计时，在 <code>afterCompletion()</code> 中结束计时并获取请求和响应信息</li><li>将请求和响应信息异步存储到数据库中</li></ol><h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>流程很简单，但是在获取 requestBody（请求体）和 responseBody（响应体）时出了些问题。如果我在 <code>preHandle()</code> 中获取了请求体信息，那么对应 Handler 就无法获取了，反之如果我是在 <code>afterCompletion</code> 中获取请求体信息，那么就获取不到了。而对于响应体，在我获取完之后，向前端响应就没内容了。</p><h2 id="原因分析" tabindex="-1">原因分析 <a class="header-anchor" href="#原因分析" aria-label="Permalink to &quot;原因分析&quot;">​</a></h2><p>之所以如此，是由于请求体和响应体分别对应的是 InputStream 和 OutputStream，由于流的特性，使用完之后就无法再被使用了。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * Retrieves the body of the request as binary data using a {@link ServletInputStream}. Either this method or</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * {@link #getReader} may be called to read the body, not both.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> a {@link ServletInputStream} object containing the body of the request</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@exception</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> IllegalStateException</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> if the {@link #getReader} method has already been called for this request</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@exception</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> IOException</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">           if an input or output exception occurred</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ServletInputStream </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getInputStream</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() throws IOException;</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * Returns a {@link ServletOutputStream} suitable for writing binary data in the response. The servlet container</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * does not encode the binary data.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * &lt;p&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * Calling flush() on the ServletOutputStream commits the response.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * Either this method or {@link #getWriter} may be called to write the body, not both, except when {@link #reset}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * has been called.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> a {@link ServletOutputStream} for writing binary data</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@exception</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> IllegalStateException</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> if the &lt;code&gt;getWriter&lt;/code&gt; method has been called on this response</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@exception</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> IOException</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">           if an input or output exception occurred</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@see</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> #getWriter</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@see</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> #reset</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ServletOutputStream </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getOutputStream</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() throws IOException;</span></span></code></pre></div><p>想要解决的话就要想办法把这信息使用完再“塞回去”，直接“塞回去”是不可能的。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>为了解决这个问题，Servlet 提供了两个类 HttpServletRequestWrapper、HttpServletResponseWrapper，我们可以继承它们来实现请求体和响应体内容的缓存，达到重复读取请求体和响应体的目的。</p><p>不过既然我们在使用 Spring 框架，贴心的 Spring 也提供了两个实现类：ContentCachingRequestWrapper、ContentCachingResponseWrapper，这样我们就无需再自行定义相应 Wrapper 直接使用它们就可以解决这个问题了。</p><p>下面是在过滤器中对请求对象和响应对象进行包装处理的代码段：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.core.Ordered;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.stereotype.Component;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.web.filter.OncePerRequestFilter;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.web.util.ContentCachingRequestWrapper;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.web.util.ContentCachingResponseWrapper;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.web.util.WebUtils;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> javax.servlet.FilterChain;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> javax.servlet.ServletException;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> javax.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> javax.servlet.http.HttpServletResponse;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> java.io.IOException;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> java.util.Objects;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * 缓存请求体和响应体过滤器</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * &lt;p&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * 由于 requestBody 和 responseBody 分别对应的是 InputStream 和 OutputStream，由于流的特性，读取完之后就无法再被使用了。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * 所以，需要额外缓存一次流信息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * &lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@author</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> Charles7c</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@since</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> 2022/9/22 16:33</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> ContentCachingWrapperFilter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> OncePerRequestFilter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> Ordered</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> getOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Ordered.LOWEST_PRECEDENCE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> doFilterInternal</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(HttpServletRequest </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, HttpServletResponse </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, FilterChain </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">filterChain</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        throws</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ServletException, IOException {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 包装流，可重复读取</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">instanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ContentCachingRequestWrapper)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> ContentCachingRequestWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(request);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">instanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ContentCachingResponseWrapper)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> ContentCachingResponseWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(response);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        filterChain.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">doFilter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(request, response);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">        updateResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(response);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * 更新响应（不操作这一步，会导致接口响应空白）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> response</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> 响应对象</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@throws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> IOException</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> updateResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(HttpServletResponse </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> IOException {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        ContentCachingResponseWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> responseWrapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> WebUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getNativeResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(response, ContentCachingResponseWrapper.class);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        Objects.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">requireNonNull</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(responseWrapper).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">copyBodyToResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>下面是使用缓存对象来获取请求体或响应体的代码段，在你需要的地方使用就可以了：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.apache.commons.io.IOUtils;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// --------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * 获取请求体</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> request</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> 请求对象</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> 请求体</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getRequestBody</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(HttpServletRequest request) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> requestBody</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ContentCachingRequestWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> wrapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> WebUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getNativeRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(request, ContentCachingRequestWrapper.class);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (wrapper </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        requestBody </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> IOUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(wrapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getContentAsByteArray</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(), StandardCharsets.UTF_8.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> requestBody;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * 获取响应体</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> response</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> 响应对象</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> 响应体</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getResponseBody</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(HttpServletResponse response) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> responseBody</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ContentCachingResponseWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> wrapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> WebUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getNativeResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(response, ContentCachingResponseWrapper.class);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (wrapper </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        responseBody </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> IOUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(wrapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getContentAsByteArray</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(), StandardCharsets.UTF_8.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> responseBody;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div>`,18);function F(s,u,E,m,v,b){const t=l,e=k("ClientOnly");return p(),r("div",null,[C,d(e,null,{default:g(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(p(),o(t,{key:0,article:s.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),B])}const R=h(c,[["render",F]]);export{q as __pageData,R as default};
