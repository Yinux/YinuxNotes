import{_ as k}from"./chunks/ArticleMetadata.Dcvy9UPn.js";import{_ as p,D as e,c as r,I as d,w as A,j as n,a as g,a6 as y,o as t,b as D,e as C}from"./chunks/framework.DMU8tcfM.js";import"./chunks/theme.dlxSnV2a.js";const f=JSON.parse('{"title":"用Java8获取近N天日期","description":"","frontmatter":{"title":"用Java8获取近N天日期","author":"查尔斯","date":"2021/11/18 20:55","categories":["方案春秋志"],"tags":["Java"]},"headers":[],"relativePath":"categories/solutions/2021/11/18/用Java8获取近N天日期.md","filePath":"categories/solutions/2021/11/18/用Java8获取近N天日期.md","lastUpdated":1720883892000}'),F={name:"categories/solutions/2021/11/18/用Java8获取近N天日期.md"},c=n("h1",{id:"用java8获取近n天日期",tabindex:"-1"},[g("用Java8获取近N天日期 "),n("a",{class:"header-anchor",href:"#用java8获取近n天日期","aria-label":'Permalink to "用Java8获取近N天日期"'},"​")],-1),B=y(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>C：</strong> 登录进入管理类系统，首页一般都是以展示数据仪表盘为主。例如：展示一些总量、展示近一周或是近 N 天的某数据的折线图、柱状图等等。</p><p>那在展示这类近 N 天的图表时，后端必然要给前端提供一个近 N 天的日期集合用于显示。</p><p>至于实现的方法也有很多种，笔者在这儿就记录一种目前看来扩展性相对较好的方案。</p><h2 id="涉及技术栈" tabindex="-1">涉及技术栈 <a class="header-anchor" href="#涉及技术栈" aria-label="Permalink to &quot;涉及技术栈&quot;">​</a></h2><ul><li>Spring Boot 2.3.1.RELEASE</li><li>MyBatis Plus 3.1.0（使用了 MyBatis Plus 的代码生成器）</li></ul><h2 id="controller层" tabindex="-1">Controller层 <a class="header-anchor" href="#controller层" aria-label="Permalink to &quot;Controller层&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * 统计控制器</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@author</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> Charles7c</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * @date 2021/11/18 20:55</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Api</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;统计接口&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">tags</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;统计接口集&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">RestController</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/statistics&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> StatisticsController</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Resource</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> IRequestService</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> requestService;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/request/{days}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">ApiOperation</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;日请求数据统计&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">notes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;日请求数据统计接口&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> R&lt;Map&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">requestByDays</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">ApiParam</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;days&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">required</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">PathVariable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;days&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) Integer </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">days</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> R.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">ok</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(requestService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getRequestTotal</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(day));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="service层" tabindex="-1">Service层 <a class="header-anchor" href="#service层" aria-label="Permalink to &quot;Service层&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>Service 层接口内容略，这个应该对你没影响吧？</p></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * 请求服务实现类</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@author</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> Charles7c</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * @date 2021/11/18 20:55</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Service</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> RequestServiceImpl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> ServiceImpl</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">RequestMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Request</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> IRequestService</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Map&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getRequestTotal</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> days</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 响应数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        Map</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">respMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> MapUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">newHashMap</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 日期列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    	List</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">dateList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ArrayList&lt;&gt;(days);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">		// 请求列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        List</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">requestList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 指定日期格式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    	DateTimeFormatter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> formatter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> DateTimeFormatter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">ofPattern</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;yyyy-MM-dd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 遍历生成日期列表</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 例如：days 为 5，现在是 2021-11-18,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 则可以获取到 2021-11-14、2021-11-15、2021-11-16、2021-11-17、2021-11-18</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    	for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> days </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 当前日期 - i天</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    		LocalDateTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> plusDate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> LocalDateTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">plusDays</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">i);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 将日期转换为 yyyy-MM-dd 格式字符串</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        	String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> plusDateStr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> formatter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(plusDate);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 添加到日期列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        	dateList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(plusDateStr);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // [根据日期查询指定统计数据列表（具体使用时，根据你自己需求决定查询什么表，什么字段...，此处仅为样例）]</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">			LambdaQueryWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Request</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">queryWrapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Wrappers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">lambdaQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 拼接 SQL，apply 用法，参见：https://mp.baomidou.com/guide/wrapper.html#apply</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">			queryWrapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;date_format(create_time, &#39;%Y-%m-%d&#39;) = {0}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, plusDateStr);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">			requestList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(baseMapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">selectCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(queryWrapper).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 添加响应数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        respMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;dateList&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, dateList);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        respMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;requestList&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, requestList);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> respMap;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div>`,11);function o(s,E,u,m,q,v){const h=k,l=e("ClientOnly");return t(),r("div",null,[c,d(l,null,{default:A(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),D(h,{key:0,article:s.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),B])}const M=p(F,[["render",o]]);export{f as __pageData,M as default};
