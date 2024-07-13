import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.C6Z_8Ss2.js";const e="/assets/202203252252923.Bly8FFgH.png",n="/assets/202203252252926.DR995rxY.png",l="/assets/202203252252929.DRLyrGgI.png",p="/assets/202203252252931.D-I0rhW_.png",b=JSON.parse('{"title":"合并两个Git仓库的历史提交记录","description":"","frontmatter":{"title":"合并两个Git仓库的历史提交记录","author":"查尔斯","date":"2022/03/25 21:30","categories":["杂碎逆袭史"],"tags":["Git"]},"headers":[],"relativePath":"docs/categories/fragments/2022/03/25/合并两个Git仓库的历史提交记录.md","filePath":"docs/categories/fragments/2022/03/25/合并两个Git仓库的历史提交记录.md"}'),h={name:"docs/categories/fragments/2022/03/25/合并两个Git仓库的历史提交记录.md"},d=t(`<h1 id="合并两个git仓库的历史提交记录" tabindex="-1">合并两个Git仓库的历史提交记录 <a class="header-anchor" href="#合并两个git仓库的历史提交记录" aria-label="Permalink to &quot;合并两个Git仓库的历史提交记录&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>C：</strong> 最近在下班的时间一直在维护一个基于 EL-Admin 这个开源后台管理系统的衍生开源项目。EL-Admin 这个项目是采用前后端分离架构开发的，所以在开源平台上是分为了两个项目库，一个前端的，一个后端的。</p><p>这本无可厚非，分成两个项目库，在开发时还是挺友好的，公司内部基本也是这个模式，但对于一个开源项目来说，分散为两个库还是有一些不利的方面。</p><ol><li>在管理 issue 上不太方便，项目作者要兼顾查看两个项目，而且有些小伙伴在提出 issue 时并不会管你这是前端库还是后端库，提就完事了。在这方面，EL-Admin 项目的作者应该也发现了这个问题，所以直接干脆的关闭了前端库的 issue 功能，集中在后端库一起管理。</li><li>在 star 方面会造成分流，前段时间看了看微博，在不知什么时候，竟然加入了一个明星超话，意外就看到置顶帖里标注了一点禁止创建其他小号超话，现在想想这不是一个意思吗？</li><li>...</li></ol><p>本来笔者最开始也是按原项目形式创建了两个 Git 仓库，但最近更换设备开发时单独要拉两次仓库，觉得很麻烦，思索了下突然意识到上述问题，干脆趁着这热乎劲儿，以后端仓库为主，把两个仓库合并一下。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><h3 id="将前端项目提交到后端库" tabindex="-1">将前端项目提交到后端库 <a class="header-anchor" href="#将前端项目提交到后端库" aria-label="Permalink to &quot;将前端项目提交到后端库&quot;">​</a></h3><p>这是笔者首先想到的方法，即将前端项目拉下来，然后将前端项目的源码放到后端库里，提交一下。很简单粗暴，但是这种方法会造成之前前端项目历史提交记录的丢失。</p><h3 id="不影响提交记录-合并仓库" tabindex="-1">不影响提交记录，合并仓库 <a class="header-anchor" href="#不影响提交记录-合并仓库" aria-label="Permalink to &quot;不影响提交记录，合并仓库&quot;">​</a></h3><p>笔者当然不希望将前端项目的历史提交记录丢失了，所以最终采用了下方的方案，完整步骤如下：</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>提示说明一下，后端仓库名叫：eladminx，前端仓库名叫：eladminx-web</p></div><ol><li><p>克隆后端项目仓库到本地（笔者没有在 git bash 中操作，而是在 cmd 中进行的）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/Charles7c/eladminx.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eladminx</span></span></code></pre></div><p><img src="`+e+'" alt="202203252252923"></p></li><li><p>将前端仓库作为后端仓库的远程仓库，起别名为 frontend（这个随便起）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frontend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/Charles7c/eladminx-web.git</span></span></code></pre></div><p><img src="'+n+'" alt="202203252252926"></p></li><li><p>将前端仓库的 master 分支（自己选择哪个分支）合并到后端仓库</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --strategy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ours</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frontend/master</span></span></code></pre></div><p><img src="'+l+'" alt="202203252252929"></p><p>想法很美，但是报错了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fatal: refusing to merge unrelated histories</span></span></code></pre></div><p>这是因为后端仓库的本地分支历史记录和前端仓库的历史记录不匹配，人家 Git 怀疑你是不是合并错了，但咱们知道就是要合并，写个声明 “表明出事儿与人家无关”就可以了。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --strategy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ours</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --allow-unrelated-histories</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frontend/master</span></span></code></pre></div><p><img src="'+p+`" alt="202203252252931"></p></li><li><p>将前端仓库的 master 分支内容放到在后端仓库内刚建好的 eladminx-web 文件夹中</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eladminx-web</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> read-tree</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix=eladminx-web/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frontend/master</span></span></code></pre></div></li><li><p>提交刚才的修改（毕竟你刚才又合并又创建文件夹的，肯定要提交修改啊）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;迁移前端项目仓库，与后端项目仓库合并&quot;</span></span></code></pre></div></li><li><p>最后将本地的修改强制推送到远程仓库即可</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span></code></pre></div></li></ol><p>到此为止，笔者这两个项目的 master 分支就合并完了，如果你想合并其他分支，例如：dev，那就首先把后端仓库的分支切换到 dev，然后将上述中的 master 这个分支名换为 dev 就可以了。</p><h2 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-label="Permalink to &quot;后记&quot;">​</a></h2><p><strong>C：</strong> 关于这个合并，你以哪个仓库为主都可以。最后合并的提交记录是以历史提交时间进行降序排列的。</p>`,16),r=[d];function o(k,c,g,F,m,u){return a(),i("div",null,r)}const y=s(h,[["render",o]]);export{b as __pageData,y as default};
