import{_ as p}from"./chunks/ArticleMetadata.B3-IGLbF.js";import{_ as r,D as i,c as n,I as l,w as m,j as a,a as h,a6 as _,o as d,b as J,e as D}from"./chunks/framework.DMU8tcfM.js";import"./chunks/theme.B7wFqaW6.js";const u="/assets/202010021219728.B0KvlLZI.jpg",g="/assets/202010021221992.CxwW8cyT.png",v="/assets/202010021222666.CudURVlX.png",b="/assets/202010021222777.CLtU0Bl_.png",K="/assets/202010021222888.BFm3BqXU.png",O="/assets/202010021223666.Dw0CQdo0.png",k="/assets/202010021223777.vGLqSF7T.png",q="/assets/202010021224888.Ct2puaua.png",S="/assets/202010021224999.K_frPftC.png",f="/assets/202010021225560.yUcpw3eI.png",x="/assets/202010021225676.BepT6nzH.png",j="/assets/202010021226600.DMOfXw6Q.png",w="/assets/202010021226999.DRFM6YUM.png",P="/assets/202010021227666.D6vDn3BN.png",A="/assets/202010021227777.D00snFJ7.png",E="/assets/202010021227888.B1FX99lQ.png",C="/assets/202010021228963.DfYRCvFM.png",R="/assets/202010021228999.DE_A4hhh.png",B="/assets/202010021229777.Br_BiF2F.png",W="/assets/202010021232169.BeAaIjvM.png",T="/assets/202010021232222.CNHl283_.png",M="/assets/202010021232586.Brzle7WV.png",V="/assets/202010021233888.hQbS-js1.png",L="/assets/202010021234766.DDjMKsl1.png",N="/assets/202010021234888.aAZu-SSN.png",y="/assets/202010021234999.HPWk8yJz.png",F="/assets/202010021235666.CS-5NaN-.png",Q="/assets/202010021235777.WjbAp5-V.png",H="/assets/202010021235888.CAuOjbiM.png",I="/assets/202010021235999.BwAwsDUd.png",U="/assets/202010021236761.RE_oUkCo.png",z="/assets/202010021236888.BM258c3K.png",G="/assets/202010021236999.BUzVx97I.png",$="/assets/202010021237281.C9xm13m6.png",X="/assets/202010021237777.DMQdK6Jv.png",Y="/assets/202010021237888.DNv_3XT-.png",Z="/assets/202010021238777.Dy6tp380.png",ee="/assets/202010021238999.ChCFp-MF.png",oe="/assets/202010021239111.YFo5T5nJ.png",ce="/assets/202010021240572.Bt_xxhQc.png",ae="/assets/202010021241888.BGA6Krwu.png",de="/assets/202010021241999.Bsbla8v1.png",te="/assets/202010021242277.CdRyijct.png",se="/assets/202010021243229.Don2aVOp.png",pe="/assets/202010021243777.23_KpjFz.png",re="/assets/202010021243888.DNg3gRw6.png",ie="/assets/202010021245777.CAiClcmQ.png",ne="/assets/202010021245888.B5SdamDd.png",le="/assets/202010021245999.B-vlllmk.png",me="/assets/202010021246666.BDyU9vCC.png",he="/assets/202010021246777.DyNxIAiW.png",fe=JSON.parse('{"title":"开发环境搭建","description":"","frontmatter":{"title":"开发环境搭建","author":"查尔斯","date":"2020/10/02 21:29","categories":["Java基础快速入门"],"tags":["Java","Java基础","JDK","开发环境"]},"headers":[],"relativePath":"courses/java/01-Java语法入门/01-开发环境搭建.md","filePath":"courses/java/01-Java语法入门/01-开发环境搭建.md","lastUpdated":1720883892000}'),_e={name:"courses/java/01-Java语法入门/01-开发环境搭建.md"},Je=a("h1",{id:"开发环境搭建",tabindex:"-1"},[h("开发环境搭建 "),a("a",{class:"header-anchor",href:"#开发环境搭建","aria-label":'Permalink to "开发环境搭建"'},"​")],-1),De=_('<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>C：</strong> 上篇的介绍是否能让你对 Java 语言有一个初步的认识呢？认识完后，大家可能着急想上手编程了吧？但就像你要去游泳，也得先找到一个泳池？所以还是先耐下性子，听笔者说，在正式开发一个 Java 程序前，我们首先应该在计算机中，准备好对应的开发环境，Java 语言所需要的开发环境是 JDK / JRE。</p><p>这是万里长征的第一步，搭好 Java 基础开发环境是 Java 系开发者必须掌握的技能，所以笔者建议你，收藏好本篇教程，JDK 多安装个几遍，它又不是流氓软件，不影响（卸载不残留，重装如新装）。</p><p><img src="'+u+'" alt="202010011219728"></p><h2 id="jdk和jre的概念" tabindex="-1">JDK和JRE的概念 <a class="header-anchor" href="#jdk和jre的概念" aria-label="Permalink to &quot;JDK和JRE的概念&quot;">​</a></h2><p>首先我们介绍一下我们要安装的 JDK / JRE 的概念。</p><p><code>JDK</code> 的全称是 <code>Java Development Kit</code>，即 Java 开发工具包，是 Sun 公司提供的一套用于开发 Java 应用程序的开发包，它提供了编译、运行 Java 程序所需的各种工具和资源，包括 Java 编译器、Java 运行时环境（<code>JRE</code>），以及常用的 Java类库 等。</p><p><code>JRE</code>，全称 <code>Java Runtime Environment</code> ，Java 运行时环境。它是运行 Java 程序的必须条件。如果只是运行Java 程序，可以只安装 <code>JRE</code>，无需安装 <code>JDK</code>。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>在业内，一般都是直接安装 <code>JDK</code>，因为 <code>JDK</code> 内置了一个 <code>JRE</code>，我们亦是如此。</p></div><h2 id="jdk的选择" tabindex="-1">JDK的选择 <a class="header-anchor" href="#jdk的选择" aria-label="Permalink to &quot;JDK的选择&quot;">​</a></h2><h3 id="选择谁家的" tabindex="-1">选择谁家的？ <a class="header-anchor" href="#选择谁家的" aria-label="Permalink to &quot;选择谁家的？&quot;">​</a></h3><p>了解完 <code>JDK</code> 概念之后，我们还要了解下目前 <code>JDK</code> 的现状。Sun 公司当初开发了 Java 语言，作为 Java 语言的开发工具包， <code>JDK</code> 在发展中被 Sun 公司分化为了两大分支。（ 可延伸阅读 <a href="https://www.51cto.com/specbook/11/35089.htm" target="_blank" rel="noreferrer">Java 终于开源了，采用GPLv2授权协议</a> ）</p><ul><li><code>Open JDK</code> ，开源（源代码公开）版本，以 GPL V2（General Public License）协议的形式开源</li><li><code>Sun JDK</code> ，使用 JRL（Java Research License，Java 研究授权协议）发布。</li></ul><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>GPL 协议，在开源协议里被称为&quot;病毒&quot;协议，只要是基于 GPL 协议 <strong>开源</strong> 的代码来开发，那么这项目也必须开源。</p><p>JRL 协议，是 Sun 公司自己搞出来的协议，理解起来就是 Sun 公司公开代码，但是代码的所有权完全归它自己所有，你们能看。</p><p>不过上述协议对我们使用 JDK 没有什么影响，它影响的是那些想改动 JDK 或基于 JDK 代码二次开发的个人或公司群体，我们又不动 JDK 代码。</p></div><p>其实两个分支版本，在发展中有很大部分的相同代码，不过<code>Open JDK</code>不如 <code>Sun JDK</code> 完整是肯定的(缺少一些特性API)，且一部分代码由于产权等原因无法授权给 <code>Open JDK</code> 使用，便在 <code>Open JDK</code> 中替换为没有产权问题的代码。</p><p>很多大公司为了避免版权问题，都在使用基于 <code>Open JDK</code> 开发或自主开发的 JDK 版本，例如亚马逊的 Corretto、阿里巴巴的 Dragonwell、华为的毕昇、腾讯的 Kona等（咱们国内今年井喷式开源 JDK）。</p><p>另外我们都知道，Sun （升阳公司）在2009年被 Oracle（甲骨文公司）收购了，Java 相关业务及版权也就归Oracle 所有。后续的 <code>JDK</code> 更新当然也就由 Oracle 负责了，但是 Oracle 在行业内有一个&quot;不太好&quot;的名声，&quot;什么都要钱，什么都死贵&quot;（实际上，商业公司的本质就是盈利，Sun 公司当初还没做到怎么盈利就没了，Oracle 后面继续做这件事也无可厚非）。</p><p>在2009年到2019年期间，Oracle 没有做什么收费的大动作，但是这种情况在2019年1月1日出现了点变化。Oracle 宣布从2019年1月1日起，<code>Oracle JDK 8</code> 的后续更新将需要收费。<code>Oracle JDK 8</code> 的 <code>8u211</code> 和 <code>8u212</code>更新，开始把许可协议从 <code>BCL</code> 换成了 <code>OTN</code>，这就意味着，你不能在生产环境使用这类版本了。</p><div class="tip custom-block"><p class="custom-block-title">Oracle 采用的许可协议介绍</p><p>BCL协议，即Oracle Binary Code License Agreement，协议规定你可以使用JDK，但是不能进行修改(和上文的JRL类似)，私用和商用都可以，但是JDK中的某些商业特性，是需要付费才可以使用的。</p><p>OTN协议，即Oracle Technology Network License Agreement，目前新发布的JDK用的都是这个协议，可以私用，商用需要付费。[1]</p></div><p>一石激起千层浪，本来就担心的事终于发生了，很多公司更是开始进行 <code>JDK</code> 版本转移和考虑以后的选择。</p><p>下图是2020年初，Jrebel 在 Java 生态报告中，对 <code>JDK</code> 选择的调查结果（中国内也差不多，仅供参考）。根据结果表示，<code>Oracle JDK(Sun JDK)</code>和<code>Oracle Open JDK(Sun Open JDK)</code>还是占据比较大的市场地位，但<code>AdoptOpenJDK</code>的占有率也在迅速提升中。</p><p>我们现在学习选择用 <code>Oracle JDK</code> 就可以了，公司内就看公司的架构师或领导想法了。[可延伸阅读，了解更多的 <a href="https://www.oschina.net/news/99836/time-to-look-beyond-oracles-jdk" target="_blank" rel="noreferrer">JDK 发行版</a>]</p><p><img src="'+g+'" alt="202010021221992"></p><h3 id="选择哪个版本" tabindex="-1">选择哪个版本？ <a class="header-anchor" href="#选择哪个版本" aria-label="Permalink to &quot;选择哪个版本？&quot;">​</a></h3><p>每个版本的对应 <code>Open JDK</code> 更新也不是无限期，是有支持期限的。<code>Oracle JDK 8</code> 还有个人版、商业版。这些事其实还挺头疼的，不过我们现在学习用 <code>Oracle JDK</code> 没有问题，进公司到时候就&quot;入乡随俗&quot;吧。</p><p>选定好发行版之后，那我们用第几版本呢？下面是 Jrebel 的报告，其中很明显是 <code>JDK 8</code> 应用最广。虽然截止笔者调整教程今天，JDK 已经快要发布到了 <code>JDK 16</code>，但是公司追求的是稳定，所以没有太大更新或修复的情况，一般升级就非常慢，你想想 Windows 7 到 Windows 10 的用户升级之路就理解了。另外 JDK 9、JDK 10 都没人用，是因为它们都是过渡版本，类似于 Windows8 一样，不是长期支持（维护）版本。</p><p><img src="'+v+'" alt="202010021222666"></p><h2 id="jdk下载" tabindex="-1">JDK下载 <a class="header-anchor" href="#jdk下载" aria-label="Permalink to &quot;JDK下载&quot;">​</a></h2><p>既然我们选择了 <code>Oralce JDK 8</code>，那就前往Oracle官网下载吧。</p><p>1.打开下方的链接，或者自行百度搜索 <code>JDK</code>，找到类似下方页面。</p><ul><li><p><a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank" rel="noreferrer">Oracle国际官网</a></p></li><li><p><a href="http://www.oracle.com/technetwork/cn/java/javase/downloads/index.html" target="_blank" rel="noreferrer">Oracle中国官网</a></p></li></ul><p><img src="'+b+'" alt="202010021222777"></p><p>2.下拉到页面最下方，找到<code>Java Archive</code>点击进入<code>JDK</code>历史版本存档页面。</p><p><img src="'+K+'" alt="202010021222888"></p><p>你看 <code>Java SE 8</code> 分为了两个链接，<code>8u211及之后 </code>（收费）和<code>8u202及之前</code>（免费）。</p><p><img src="'+O+'" alt="202010021223666"></p><p>3.点击 <code>Java SE 8(8u2020 and earlier)</code> 进入下载页面，然后选择你所需的平台版本。大多数同学应该用的都是 Windows 64 位的系统，选择下方箭头指示的版本即可。</p><p><img src="'+k+'" alt="202010021223777"></p><p>记得勾选 <code>卖身协议</code> 。</p><p><img src="'+q+'" alt="202010021224888"></p><p>Oracle 现在要求下载 <code>JDK</code> 必须先登录，没有帐号的同学，自己先注册一个吧。网络是真慢！忍忍！</p><p><img src="'+S+'" alt="202010021224999"></p><p>4.终于下载好了，笔者家里开的热点网络，太慢了。</p><p><img src="'+f+'" alt="202010021225560"></p><h2 id="jdk安装" tabindex="-1">JDK安装 <a class="header-anchor" href="#jdk安装" aria-label="Permalink to &quot;JDK安装&quot;">​</a></h2><p>下载好了，开始安装 <code>JDK</code> 吧，和安装 QQ 等软件一样，而且它不是流氓软件，不会静默给你下载一个&quot;全家桶&quot;。</p><p>1.双击程序安装包，开始进行 <code>JDK</code> 安装，点击下一步。</p><p><img src="'+x+'" alt="202010021225676"></p><p>2.点击更改，更改 <code>JDK</code> 的安装位置。</p><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>为了防止出现，你自己安装的软件自己都找不到在哪儿这种问题，我们统一安装位置，任选一个磁盘，在其下新建一个 <code>develop</code> 的文件夹，用于以后安装所有开发软件。笔者演示时将 <code>develop</code> 文件夹放在了 <code>d</code> 盘下。</p></div><p><img src="'+j+'" alt="202010021226600"></p><p>在弹出的更改安装目录对话框中，只需要修改前面的盘符 <code>d:</code> 和文件夹 <code>develop</code>，后面的子文件夹 <code>Java\\jdk1.8.0_xxx\\</code> 不需要修改，然后点击确定。如果文件夹不存在，安装时会自动创建。</p><div class="danger custom-block"><p class="custom-block-title">笔者说</p><p>安装路径不要出现空格，中文，特殊符号等！</p></div><p><img src="'+w+'" alt="202010021226999"></p><p>这个时候程序将要安装的位置已经更改，点击下一步即可开始安装。</p><p><img src="'+P+'" alt="202010021227666"></p><h3 id="关于我们安装jdk时到底安装了些什么" tabindex="-1"><strong>关于我们安装JDK时到底安装了些什么？</strong> <a class="header-anchor" href="#关于我们安装jdk时到底安装了些什么" aria-label="Permalink to &quot;**关于我们安装JDK时到底安装了些什么？**&quot;">​</a></h3><p>我们选中第一个 <code>开发工具</code> 时，右侧给出了提示，这是安装的 <code>JDK</code>。它是最主要的，甚至我们可以说只需要有它就可以。</p><p><img src="'+A+'" alt="202010021227777"></p><p>当我们选中第二个 <code>源代码</code> 时右侧给出提示，这是 Java 8 的源代码，因为 Java 是公开源代码的。</p><p><img src="'+E+'" alt="202010021227888"></p><p>当我选中第三个 <code>公共JRE</code> 时，右边给出提示，这是一个独立的 <code>JRE</code>，我们可以不用安装。不过一般情况我们都选择安装，目的是为了以后如果有一些 Java 程序想单独运行，那么必须配套一个 <code>JRE</code>，到那时候就可以用上了。</p><p><img src="'+C+'" alt="202010021228963"></p><p>比如下方是做支付宝第三方支付支持时，支付宝官方给提供的一个做签名校验的 Java 程序。后缀名为 <code>.jar</code> 的是 Java 程序，但是如果想运行此程序就必须依赖上方的一个独立 <code>jre</code>，我们刚才安装选择界面看到的就是它。(支付宝官方下载下来的这工具，就给你带着这个 JRE )</p><p><img src="'+R+'" alt="202010021228999"></p><p>4.等待安装，这步只是在安装 <code>JDK</code>。</p><p><img src="'+B+'" alt="202010021229777"></p><p>安装完 <code>JDK</code> 后，会弹出一个提示框，提示我们安装的 <code>JDK</code> 版本不受到收费影响，点确定即可。</p><p><img src="'+W+'" alt="202010021232169"></p><p>5.因为刚才我们没有放弃独立 <code>JRE</code> 的安装，所以现在开始安装它，自己更改好安装路径。最好类似我下方示例，然后点击下一步。</p><p><img src="'+T+'" alt="202010021232222"></p><p>等待安装。</p><p><img src="'+M+'" alt="202010021232586"></p><p>点击关闭，即完成安装。</p><p><img src="'+V+'" alt="202010021233888"></p><p>安装完成后，你的桌面不会出现任何图标，不用大惊小怪，<code>JDK</code> 是开发环境，不是 QQ 这类软件。</p><p><code>JDK</code> 的安装目录如下。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>刚才之所以说可以不安装那个独立 <code>JRE</code>，因为 <code>JDK</code> 本身自己就自带一个 <code>JRE</code>，为什么<code>JDK</code> 会自带一个？我们就不讨论 JDK 内自带的 Java 程序，就说我们用 <code>JDK</code> 开发 Java 程序，开发好后也需要进行测试运行啊，所以自然需要这 <code>JRE</code> 了。</p></div><p><img src="'+L+'" alt="202010021234766"></p><p>独立 <code>JRE</code> 的安装目录如下。</p><p><img src="'+N+'" alt="202010021234888"></p><p>安装完之后，我们想测试一下 <code>JDK</code> 是否安装成功，可以运行 <code>JDK</code> 安装目录下 <code>bin</code> 目录内的 <code>java.exe</code> 程序。如果你看不到 <code>.exe</code>，记得自行开启下计算机的扩展名显示。</p><p>在 <code>Windows</code> 中我们习惯双击运行程序，但是却发现 <code>java.exe</code> 双击后会弹出一个黑窗口一闪而过。这是因为这种程序，它们需要在特别的系统内运行，比如说我们的 <code>DOS</code> 系统，下面就和笔者去学一下基本的 <code>DOS</code> 使用吧。</p><p><img src="'+y+'" alt="202010021234999"></p><h2 id="dos系统" tabindex="-1">DOS系统 <a class="header-anchor" href="#dos系统" aria-label="Permalink to &quot;DOS系统&quot;">​</a></h2><h3 id="什么是dos" tabindex="-1">什么是DOS？ <a class="header-anchor" href="#什么是dos" aria-label="Permalink to &quot;什么是DOS？&quot;">​</a></h3><p>那 <code>DOS</code> 是什么呢？它的全称是 <code>Disk Operating System</code> ，即磁盘操作系统。简单点说，你看过的电影里，黑客们是不是在计算机的一个黑窗口中&quot;运指如飞&quot;？这个所谓的黑窗口不是 <code>DOS</code> 那就是 Linux 系。</p><p>实际上 <code>DOS</code> 它就是早期主流的计算机操作系统，后来 Windows 等主打可视化的系统出现，才让计算机逐渐摆脱专业的概念，变得&quot;平民化&quot;，走入千家万家。之前之所以专业化，就是因为这个系统需要通过命令来进行计算机操作，而不能使用鼠标点来点去，所以非专业人士去背命令和习惯这使用方式，简直&quot;太难&quot;了。</p><p><img src="'+F+'" alt="202010021235666"></p><h3 id="进入dos系统" tabindex="-1">进入DOS系统 <a class="header-anchor" href="#进入dos系统" aria-label="Permalink to &quot;进入DOS系统&quot;">​</a></h3><p>在Windows 系统任何位置，可以通过按下 <code>Windows</code> 键 + <code>r</code> 键，在左下角弹出的运行窗口输入 <code>cmd</code> 然后回车，就可以弹出 <code>DOS</code> 命令行。</p><p><img src="'+Q+'" alt="202010021235777"></p><p>另外，还可以通过在 <code>开始菜单</code> 中直接搜索 <code>cmd</code>，然后 <code>右键以管理员身份运行</code> 的方式打开。</p><p><img src="'+H+'" alt="202010021235888"></p><p>进入了 <code>DOS</code> 命令行。要求左上方有管理员标识(如果没有此标识，你创建文件等都没有权限，有些命令甚至提示不存在)。当你是 <code>Windows 10</code> 系统，那么很可能没有，因为 <code>Windows 10</code> 对于权限的把控比较严格，所以你可以采取上方的第二种方法进入 <code>DOS</code> 命令行。</p><p><img src="'+I+'" alt="202010021235999"></p><p>进入了 <code>DOS</code> 命令行，先认识下组成，前部分是当前你在 <code>DOS</code> 系统所处的路径（当前目录/文件夹，目录就是文件夹的意思，之后不再解释），后部分就是可以输入命令的位置。</p><p><img src="'+U+'" alt="202010021236761"></p><p>上方的路径，等价于你在 <code>Windows</code> 系统中进入了如下位置。</p><p><img src="'+z+'" alt="202010021236888"></p><h3 id="dos常用命令" tabindex="-1">DOS常用命令 <a class="header-anchor" href="#dos常用命令" aria-label="Permalink to &quot;DOS常用命令&quot;">​</a></h3><h4 id="查看列表" tabindex="-1">查看列表 <a class="header-anchor" href="#查看列表" aria-label="Permalink to &quot;查看列表&quot;">​</a></h4><p>在上图中，如果我们在 <code>Windows</code> 系统中进入了某个路径，可以很直观的看到当前路径下的所有文件和文件夹。那么在 <code>DOS</code> 中如何实现这一目的呢？</p><p>输入 <code>dir</code> 命令，即可列出当前所处位置的文件和文件夹列表，如下图所示。</p><p><img src="'+G+'" alt="202010021236999"></p><h4 id="切换目录" tabindex="-1">切换目录 <a class="header-anchor" href="#切换目录" aria-label="Permalink to &quot;切换目录&quot;">​</a></h4><p>那如果不想待在默认的路径了，想切换到其它位置。</p><ul><li><p>相同磁盘的目录切换，直接通过 <code>cd 目录路径</code> 来切换。（这个路径必须存在，不然切换不过去）</p><p>例如：我想切换到当前目录下的 <code>Documents</code> 目录。</p><p><img src="'+$+'" alt="202010021237281"></p></li><li><p>不同磁盘的目录切换，先通过 <code>盘符:</code> 来切换磁盘，然后 <code>cd 目录路径</code> （注意 cd 后有空格）再切换到对应位置。</p><p>例如：我想切换到刚才 <code>JDK</code> 的安装目录。</p></li></ul><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>如果路径长，在输入的时候，还可以通过 <code>Tab</code> 键来进行内容补全。例如下方的输入，输入完 <code>De</code> 就可以按一下 <code>Tab</code> 键快速补全。因为 DOS 会自动识别所在目录下的内容名字，如果能匹配到就可以快速补全，当然如果有多个 <code>De </code> 打头的内容，那就尽量输入多一些字母后再按 <code>Tab</code> ，这样就更精准。</p></div><p><img src="'+X+'" alt="202010021237777"></p><p>还有一些特别的路径切换，比如返回上一级目录。在 <code>Windows</code> 系统中，鼠标点一下返回键就可以了，在 <code>DOS</code>中，可以通过 <code>cd ..</code> 命令来切换。<code>..</code>和<code>.</code> 是每个目录下都存在的两个隐藏文件夹，它们一个代表上一级目录，一个代表当前目录。</p><p><img src="'+Y+'" alt="202010021237888"></p><p><img src="'+Z+'" alt="202010021238777"></p><p>还有在磁盘比较深的路径时，可以输入 <code>cd /</code> 来快速回到磁盘根目录下。</p><p><img src="'+ee+'" alt="202010021238999"></p><h4 id="运行程序" tabindex="-1">运行程序 <a class="header-anchor" href="#运行程序" aria-label="Permalink to &quot;运行程序&quot;">​</a></h4><p>在 <code>Windows</code> 中如果想运行程序，我们都是双击程序快捷方式或程序启动文件。而在 <code>DOS</code> 中，如果我们想要运行程序，只需要输入程序启动文件路径，然后回车即可。</p><p>例如：我想运行钉钉程序，我知道它的启动程序地址，那么就可以利用 <code>Tab</code> 快速提示着来输入好地址。下图的 <code>&quot;&quot;</code> 是按 <code>Tab</code> 自动生成的，<code>DOS </code>里为了防止空格产生的影响，可以加 <code>&quot;&quot;</code> 进行包裹，表示一个整体。</p><p><img src="'+oe+'" alt="202010021239111"></p><p>这个路径实在太长了，如果在 <code>DOS</code> 中，使用过了且没关闭 <code>DOS</code> 窗口的情况下，还需要使用时，建议按 <code>↑</code> 或 <code>↓</code> 方向键，翻一翻历史命令。</p><h3 id="测试jdk是否安装成功" tabindex="-1">测试JDK是否安装成功 <a class="header-anchor" href="#测试jdk是否安装成功" aria-label="Permalink to &quot;测试JDK是否安装成功&quot;">​</a></h3><p>OK，掌握了 <code>DOS</code> 基本使用，这时候我们再来通过它运行下 <code>java.exe</code>，输入 <code>java.exe</code> 路径太长了，我们可以偷点懒。</p><p>先通过 <code>Windows</code> 找到 <code>java.exe</code>，然后在地址栏输入 <code>cmd</code>，回车后就可以快速进入程序所在的位置了。</p><p><img src="'+ce+'" alt="202010021240572"></p><p><img src="'+ae+'" alt="202010021241888"></p><p>然后就可以运行 <code>java.exe </code>了，后面追加一个 <code>-version</code> 可以用来查看 <code>JDK</code> 的版本，如果出现下方所示内容，说明 <code>JDK</code> 的安装是完全正常的。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p><code>DOS</code> 中可以省略 <code>exe</code> 之类的后缀</p></div><p><img src="'+de+'" alt="202010021241999"></p><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><p>在刚才的内容搞定后，其实我们的 Java 开发环境已经搭建完了，我们之后开发 Java 程序会一直使用刚才的<code>java.exe </code>程序。不过现在使用还是挺麻烦的，每次都要在 <code>DOS</code> 中先找到程序或输入程序路径才能运行，有没有什么办法可以在 <code>DOS</code> 任意目录使用 <code>java.exe</code> 呢？</p><p>看看百度百科了解一下环境变量吧，其实环境变量就是操作系统里存储的一些参数或关键值，每个在操作系统里运行的程序都可以获取到这些存储的内容。（后面我们学到变量这一程序概念时，就可以更好的理解它的作用了，到时候记得回来再看看）</p><p><img src="'+te+'" alt="202010021242277"></p><h3 id="找到环境变量设置" tabindex="-1">找到环境变量设置 <a class="header-anchor" href="#找到环境变量设置" aria-label="Permalink to &quot;找到环境变量设置&quot;">​</a></h3><p>在 <code>开始菜单</code> 中搜索 <code>环境变量</code>，点击 <code>编辑系统环境变量</code>，打开 <code>系统属性</code> 对话框。</p><p><img src="'+se+'" alt="202010021243229"></p><p>在 <code>高级</code> 选项卡中，点击 <code>环境变量</code> 就可以进入修改环境变量的对话框。</p><p><img src="'+pe+'" alt="202010021243777"></p><p><img src="'+re+'" alt="202010021243888"></p><h3 id="path环境变量" tabindex="-1">path环境变量 <a class="header-anchor" href="#path环境变量" aria-label="Permalink to &quot;path环境变量&quot;">​</a></h3><p>其中 <code>path</code> 环境变量就是用来存储路径列表的，里面存储了一个个的路径。当我们在 <code>DOS</code> 命令行中直接输入程序的名字然后回车，这时候 <code>DOS</code> 会先在当前目录下搜索该文件，若找到则运行之，若找不到该文件，则根据 <code>path</code> 环境变量所设置的路径列表，顺序逐条地搜索这些路径下是否有该程序，有的话也能运行。</p><p>这就是我们现在需要的，可以有效解决我们为了运行 <code>java.exe</code> 而很麻烦的输入路径等，一劳永逸。有些同学还把一些游戏启动程序存到了 <code>path</code> 环境变量。</p><h3 id="配置java-home" tabindex="-1">配置JAVA_HOME <a class="header-anchor" href="#配置java-home" aria-label="Permalink to &quot;配置JAVA_HOME&quot;">​</a></h3><p>接下来就将 <code>java.exe</code> 的程序目录存储到 <code>path</code> 环境变量吧。</p><p>1.点击 <code>系统变量</code> 下的 <code>新建</code>，在弹出 <code>新建系统变量</code> 窗口后，将变量值设为 JDK 安装路径（bin 目录上一级），变量名设为 <code>JAVA_HOME</code> （之所以叫这名，是因为Maven、Tomcat等日后所用开发程序大多会使用到此环境变量），所以名称不允许修改。</p><p><img src="'+ie+'" alt="202010021245777"></p><p>2.上方存储的环境变量还不完整，并且没添加到 <code>path</code> 环境变量。所以我们需要在 <code>path</code> 环境变量中再做些处理。</p><p>点击系统变量中的 <code>path</code> 环境变量，然后点击 <code>编辑</code>，删除其中 Oracle 默认生成的一个目录配置（JDK 1.8之后就开始自动加上了，但是这个地址对我们用处不大，删掉）。</p><p><img src="'+ne+'" alt="202010021245888"></p><p>点击 <code>新增 </code>，添加一条 <code>%JAVA_HOME%\\bin</code> 变量，<code>%JAVA_HOME%</code> 表示引用 <code>JAVA_HOME</code> 环境变量的值，这一条变量等价于在 <code>path</code> 中添加了 <code>D:\\Develop\\Java\\jdk1.8.0_202\\bin</code>。</p><p><img src="'+le+'" alt="202010021245999"></p><div class="danger custom-block"><p class="custom-block-title">笔者说</p><p><code>Win7</code>系统的 <code>path</code> 环境变量是全部在一起的，而不是像 <code>Win10</code> 这样一条条很清晰。自己去新加入一条：<code>%JAVA_HOME%\\bin;</code>（结尾这一定要用英文<code>;</code>来分隔其他的环境变量啊！）。</p><p>还有我们在配置 Java 安装路径的时候，需要格外注意不要将之前的还有一些系统的 <code>path</code> 配置删除，也不要写错。（不要在蓝色选中状态时直接输入，会全部替换的！！！）否则有很多系统命令就没法在 DOS 中便捷愉快的使用了。</p></div><p><img src="'+me+'" alt="202010021246666"></p><h3 id="测试效果" tabindex="-1">测试效果 <a class="header-anchor" href="#测试效果" aria-label="Permalink to &quot;测试效果&quot;">​</a></h3><p>配置好 <code>path</code> 环境变量之后，关闭所有的 <code>DOS</code> 窗口。再重新打开 <code>DOS</code> 后，输入 <code>java -version</code> ，我们看到和之前一样的效果，而且我们不用在输入 <code>java.exe</code> 冗长的路径了！</p><p><img src="'+he+'" alt="202010021246777"></p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><p>[1]闷瓜蛋子. Oracle如何对JDK收费[EB/OL]. <a href="https://zhuanlan.zhihu.com/p/64731331" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/64731331</a>. 2019-06-18</p><h2 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-label="Permalink to &quot;后记&quot;">​</a></h2><p><code>JDK</code> 的安装环节也就介绍到这。补充了一些基础内容，比较杂的感觉，但实际是顺序流程的学习，好好看看本篇文章大纲！每个步骤一定要实践一下！加油！有问题可以邮箱或订阅号联系笔者。</p><div class="info custom-block"><p class="custom-block-title">笔者说</p><p>对于技术的学习，笔者一贯遵循的步骤是：先用最最简单的 demo 让它跑起来，然后学学它的最最常用 API 和 配置让自己能用起来，最后熟练使用的基础上，在空闲时尝试阅读它的源码让自己能够洞彻它的运行机制，部分问题出现的原因，同时借鉴这些技术实现来提升自己的代码高度。</p><p>所以在笔者的文章中，前期基本都是小白文，仅仅穿插很少量的源码研究。当然等小白文更新多了，你们还依然喜欢，后期会不定时专门对部分技术的源码进行解析。</p></div>',161);function ue(e,ge,ve,be,Ke,Oe){const t=p,s=i("ClientOnly");return d(),n("div",null,[Je,l(s,null,{default:m(()=>{var o,c;return[(((o=e.$frontmatter)==null?void 0:o.aside)??!0)&&(((c=e.$frontmatter)==null?void 0:c.showArticleMetadata)??!0)?(d(),J(t,{key:0,article:e.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),De])}const xe=r(_e,[["render",ue]]);export{fe as __pageData,xe as default};
