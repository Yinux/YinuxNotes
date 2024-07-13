import{_ as p}from"./chunks/ArticleMetadata.B3-IGLbF.js";import{_ as k,D as e,c as g,I as d,w as r,j as n,a as A,a6 as c,o as l,b as y,e as D}from"./chunks/framework.DMU8tcfM.js";import"./chunks/theme.B7wFqaW6.js";const x=JSON.parse('{"title":"创建一个自身类的静态对象变量，究竟会如何执行？","description":"","frontmatter":{"title":"创建一个自身类的静态对象变量，究竟会如何执行？","author":"查尔斯","date":"2022/03/24 21:30","categories":["Bug万象集"],"tags":["Java","JVM"]},"headers":[],"relativePath":"categories/issues/2022/03/24/创建一个自身类的静态对象变量，究竟会如何执行？.md","filePath":"categories/issues/2022/03/24/创建一个自身类的静态对象变量，究竟会如何执行？.md","lastUpdated":1720883892000}'),o={name:"categories/issues/2022/03/24/创建一个自身类的静态对象变量，究竟会如何执行？.md"},C=n("h1",{id:"创建一个自身类的静态对象变量-究竟会如何执行",tabindex:"-1"},[A("创建一个自身类的静态对象变量，究竟会如何执行？ "),n("a",{class:"header-anchor",href:"#创建一个自身类的静态对象变量-究竟会如何执行","aria-label":'Permalink to "创建一个自身类的静态对象变量，究竟会如何执行？"'},"​")],-1),F=c(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>C：</strong> 近两周在疯狂给项目组面试招聘，昨天晚上10点多，产品总监在面试群里发了一道题，问运行结果是什么，题目如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count1;</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        count1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        count2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Singleton </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleton;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Test</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleTon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Singleton.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;count1=&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleTon.count1);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;count2=&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleTon.count2);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>这激起了我们几个干技术的热情，那就分析一下吧。</p><h2 id="简单分析" tabindex="-1">简单分析 <a class="header-anchor" href="#简单分析" aria-label="Permalink to &quot;简单分析&quot;">​</a></h2><p>1、简单看了下题目，这不是一个采用了饿汉式单例模式的单例类嘛，接下来当然是去找程序入口了。</p><p>2、在 Test 类的 main 方法中，首先调用了 Singleton 类的 getInstance() 方法，很显然这是要获取 Singleton 这个单例类的唯一对象（实例）了。</p><p>3、然后在获取到唯一对象（实例）之后，输出了 Singleton 类的两个静态成员变量 count1、count2 的值。（虽然通过对象名调用静态信息这种方式不推荐，但是对结果没有影响）</p><p>4、看到这儿，两个类里也没别的地方有输出语句，所以最终运行结果就是要看看 count1、count2 的输出值了。</p><p>5、<strong>重点来了：</strong> 在调用 getInstance() 方法前，由于 Singleton 类没有加载，所以肯定要先加载类，由于 count1、count2、Singleton 的唯一对象（实例）都是静态的，所以它们会随着类的加载而加载。其中 int 类型的 count1 变量没有指定初始值，那默认值就是 0，count2 指定了初始值是 3， Singleton 类的唯一对象（实例）要创建会调用构造方法，构造方法里又对 count1 和 count2 进行了自增 1 的运算，那结果自然就是 count1 是 1，count2 是 4。</p><p>这么一顿火花带闪电的分析后，自信的将答案发到了群里。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>count1=1</span></span>
<span class="line"><span>count2=4</span></span></code></pre></div><h2 id="深度分析" tabindex="-1">深度分析 <a class="header-anchor" href="#深度分析" aria-label="Permalink to &quot;深度分析&quot;">​</a></h2><p>很显然答错了，不然也不会单独记录了。之所以答错了，是因为忽略了静态信息的加载顺序，静态信息的加载顺序是由编码顺序决定的，上方分析中先入为主的把 count1 和 count2 加载完了，但实际上最先执行的是 Singleton 的唯一对象（实例）创建及变量赋值，随后才是执行 count1、count2。</p><p>我们可以通过 <code>javap -c Singleton.class</code> 反汇编一下字节码文件，反汇编后的 JVM 指令如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Compiled from </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Test.java&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> org</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.example.Singleton {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count1;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count2;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.example.Singleton </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    Code</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 获取 singleton 静态对象变量，并将其值压入栈顶</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> get</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     #</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                  // Field singleton:Lorg/example/Singleton;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 从当前方法返回 singleton 对象引用</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> areturn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    Code</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 1、创建 Singleton 类的对象，并赋值给静态对象变量 singleton</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 1.1 创建对象</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">           #5                  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// class org/example/Singleton</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 1.2 复制栈顶数值并将复制值压入栈顶</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">       3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> dup                        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 1.3 调用 Singleton 类构造方法，count1 和 count2 自增 1，此时 count1 为 1，count2 为 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> invokespecial #</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">6</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                  // Method &quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 1.4 对象创建成功将对象引用赋值给静态对象变量 singleton</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> put</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     #</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                  // Field singleTon:Lorg/example/Singleton;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      // 2、将 3 赋值给 count2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      // 2.1 将 int 型 3 推送至栈顶</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> iconst_3                         </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      // 2.2 为 count2 静态变量赋值</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      11</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> put</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     #</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                  // Field count2:I</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      // 3、结束方法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      14</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                            </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>很显然了，count2 最后是被赋值为 3 了。</p><p>正确答案就是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>count1=1</span></span>
<span class="line"><span>count2=3</span></span></code></pre></div><h2 id="额外扩展" tabindex="-1">额外扩展 <a class="header-anchor" href="#额外扩展" aria-label="Permalink to &quot;额外扩展&quot;">​</a></h2><p>那如果真的想得到之前的结果呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>count1=1</span></span>
<span class="line"><span>count2=4</span></span></code></pre></div><p>只需要将 count1、count2 两个静态变量的顺序调整到 Singleton 类的唯一对象（实例）变量上方就可以了。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count1;</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        count1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        count2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Singleton </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleton;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Test</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleTon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Singleton.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;count1=&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleTon.count1);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;count2=&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> singleTon.count2);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>我们再次通过 <code>javap -c Singleton.class</code> 反汇编一下字节码文件，反汇编后的 JVM 指令如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Compiled from </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Test.java&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> org</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.example.Singleton {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count1;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count2;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.example.Singleton </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    Code</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 获取 singleton 静态对象变量，并将其值压入栈顶</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> get</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     #</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                  // Field singleton:Lorg/example/Singleton;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 从当前方法返回 singleton 对象引用</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> areturn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    Code</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 1、将 3 赋值给 count2，count2 此时为 3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 1.1 将 int 型 3 推送至栈顶</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> iconst_3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 1.2 为 count2 静态变量赋值</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> put</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     #</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                  // Field count2:I</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">       </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 2、创建 Singleton 类的对象，并赋值给静态对象变量 singleton</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 2.1 创建对象</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">           #5                  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// class org/example/Singleton</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 2.2 复制栈顶数值并将复制值压入栈顶</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">       7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> dup</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">       // 2.3 调用 Singleton 类构造方法，count1 和 count2 自增 1，count1 此时为 1，count2 此时为 4</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> invokespecial #</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">6</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                  // Method &quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      // 2.4 对象创建成功将对象引用赋值给静态对象变量 singleton</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      11</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> put</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">static</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     #</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                  // Field singleTon:Lorg/example/Singleton;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      // 3、结束方法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      14</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>很显然了，count2 最后是被自增为 4 了。</p>`,27);function B(s,u,E,m,b,v){const t=p,h=e("ClientOnly");return l(),g("div",null,[C,d(h,null,{default:r(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(l(),y(t,{key:0,article:s.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),F])}const f=k(o,[["render",B]]);export{x as __pageData,f as default};
