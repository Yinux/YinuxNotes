import{_ as g}from"./chunks/ArticleMetadata.Dcvy9UPn.js";import{_ as c,D as p,c as o,j as s,a as i,I as a,w as y,a6 as e,o as k,b as A,e as _}from"./chunks/framework.DMU8tcfM.js";import"./chunks/theme.dlxSnV2a.js";const Z=JSON.parse('{"title":"个人 SQL 优化技巧","description":"","frontmatter":{"title":"个人 SQL 优化技巧","author":"查尔斯","date":"2019/12/28 10:00","isTop":true,"categories":["杂碎逆袭史"],"tags":["SQL","SQL优化"]},"headers":[],"relativePath":"categories/fragments/2019/12/28/个人SQL优化技巧.md","filePath":"categories/fragments/2019/12/28/个人SQL优化技巧.md","lastUpdated":1720883892000}'),F={name:"categories/fragments/2019/12/28/个人SQL优化技巧.md"},D={id:"个人-sql-优化技巧",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#个人-sql-优化技巧","aria-label":'Permalink to "个人 SQL 优化技巧 <Badge text="持续更新" type="warning" />"'},"​",-1),b=s("h2",{id:"查询优化",tabindex:"-1"},[i("查询优化 "),s("a",{class:"header-anchor",href:"#查询优化","aria-label":'Permalink to "查询优化"'},"​")],-1),u={id:"如果确定结果只有一条-使用-limit-1",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#如果确定结果只有一条-使用-limit-1","aria-label":'Permalink to "如果确定结果只有一条，使用 LIMIT 1 <Badge text="建议" />"'},"​",-1),m=e('<p>我们在根据一个或多个条件查询数据时，如果确定查询结果只有一条，可以在结尾处添加 LIMIT 1 进行限制。</p><p>这样既可以让 EXPLAIN 中的 type 达到 const 类型，又可以免去担忧在程序中出现接收是单个对象却返回了一个集合对象的异常问题。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-juF3X" id="tab-Ufh89h7" checked><label for="tab-Ufh89h7">正例</label><input type="radio" name="group-juF3X" id="tab-btPCiV6"><label for="tab-btPCiV6">反例</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"># email 不是主键，也没有设置唯一约束，根据熵增定律，查询结果是有可能会出现多条的</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `sys_user`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `email`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;charles7c@126.com&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"># user_id 是主键，主键是非空唯一的，那么不需要添加 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">LIMIT</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> 进行限制</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `sys_user`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `user_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span></code></pre></div></div></div>',3),v={id:"避免隐式类型转换",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#避免隐式类型转换","aria-label":'Permalink to "避免隐式类型转换 <Badge text="强制" type="danger" />"'},"​",-1),T=e('<p>我们在使用 MySQL 时，或多或少都感受过 MySQL 的隐式类型转换。例如：user_id 是整数类型，但是依然可以使用字符串类型数据来进行判断。MySQL 帮你做完这种隐式类型转换是有代价的，什么代价呢？ <strong>索引不再生效了而已</strong> 。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qOb6X" id="tab-c_k4qDn" checked><label for="tab-c_k4qDn">正例</label><input type="radio" name="group-qOb6X" id="tab-QPrnyy4"><label for="tab-QPrnyy4">反例</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `sys_user`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `user_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `sys_user`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `user_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;10&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span></code></pre></div></div></div><h2 id="数据库表设计" tabindex="-1">数据库表设计 <a class="header-anchor" href="#数据库表设计" aria-label="Permalink to &quot;数据库表设计&quot;">​</a></h2>',3),f={id:"列名带上前缀",tabindex:"-1"},N=s("a",{class:"header-anchor",href:"#列名带上前缀","aria-label":'Permalink to "列名带上前缀 <Badge text="建议" />"'},"​",-1),x=e('<p>部分列名带上前缀或缩写，可以有效减少在连接查询、ORM 映射等场景下刻意起别名或思考区分不同的问题。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RfjdG" id="tab-fWnfIqm" checked><label for="tab-fWnfIqm">正例</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">sys_customer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">` (</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  `customer_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> bigint</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) UNSIGNED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> AUTO_INCREMENT COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;客户ID&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  `customer_name`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;客户名称&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`customer_id`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">USING</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> BTREE,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) COMMENT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;客户表&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">sys_contact_user</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">` (</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  `contact_user_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> bigint</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) UNSIGNED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> AUTO_INCREMENT COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;联系人ID&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  `contact_user_name`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;联系人名称&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  `customer_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> bigint</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) UNSIGNED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;客户ID&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`contact_user_id`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">USING</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> BTREE,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) COMMENT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;联系人表&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"># 连接查询，你完全不需要用脑去考虑到底是 c.</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`id`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> 还是 cu.</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`customer_id`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> 的问题，都是 </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`customer_id`</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `sys_customer`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> c </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">LEFT JOIN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `sys_contact_user`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> cu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">ON</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> c.</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`customer_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> cu.</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`customer_id`</span></span></code></pre></div></div></div>',2),I={id:"非负数列添加unsigned无符号约束",tabindex:"-1"},S=s("a",{class:"header-anchor",href:"#非负数列添加unsigned无符号约束","aria-label":'Permalink to "非负数列添加UNSIGNED无符号约束 <Badge text="建议" />"'},"​",-1),L=e(`<p>在大部分的数据存储场景中，我们只会使用正整数，如果能确定该列为非负数，建议添加 <code>UNSIGNED</code> 无符号约束。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-CZjKv" id="tab-fJbh_se" checked><label for="tab-fJbh_se">正例</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"># 不添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">TINYINT</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">：[-128, 127]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"># 添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">TINYINT</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">：[0, 255]</span></span></code></pre></div></div></div>`,2),M={id:"合理采用整数类型",tabindex:"-1"},P=s("a",{class:"header-anchor",href:"#合理采用整数类型","aria-label":'Permalink to "合理采用整数类型 <Badge text="建议" />"'},"​",-1),R=e('<p>例如：状态类的信息，状态再多能有多少个，采用 <code>TINYINT</code> 即可，减少存储空间占用。</p><p>下方表数据整理于：<a href="https://dev.mysql.com/doc/refman/5.7/en/integer-types.html" target="_blank" rel="noreferrer">MySQL 5.7官方文档/数据类型/数值数据类型/整数类型</a></p><table tabindex="0"><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">存储（字节）</th><th style="text-align:left;">取值范围</th><th style="text-align:left;">取值范围（无符号）</th></tr></thead><tbody><tr><td style="text-align:left;">TINYINT</td><td style="text-align:left;">1</td><td style="text-align:left;">[-128, 127]</td><td style="text-align:left;">[0, 255]</td></tr><tr><td style="text-align:left;">SMALLINT</td><td style="text-align:left;">2</td><td style="text-align:left;">[-32768, 32767]</td><td style="text-align:left;">[0, 65535]</td></tr><tr><td style="text-align:left;">MEDIUMINT</td><td style="text-align:left;">3</td><td style="text-align:left;">[-8388608, 8388607]</td><td style="text-align:left;">[0, 16777215]</td></tr><tr><td style="text-align:left;">INT</td><td style="text-align:left;">4</td><td style="text-align:left;">[-2147483648, 2147483647]</td><td style="text-align:left;">[0, 4294967295]</td></tr><tr><td style="text-align:left;">BIGINT</td><td style="text-align:left;">8</td><td style="text-align:left;">[-2^63^, 2^63^-1]</td><td style="text-align:left;">[0, 2^64^-1]</td></tr></tbody></table>',3),O={id:"布尔列采用bit类型",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#布尔列采用bit类型","aria-label":'Permalink to "布尔列采用bit类型 <Badge text="建议" />"'},"​",-1),U=e(`<p>例如：是否删除这种只有两种状态的信息，在表设计时建议对该列设置 <code>bit</code> 类型（0表示否/假/false，1表示是/真/true），在程序语言中可以采用 boolean 类型对应。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jpvSd" id="tab-3jEC5WR" checked><label for="tab-3jEC5WR">SQL</label><input type="radio" name="group-jpvSd" id="tab-v-Kew0d"><label for="tab-v-Kew0d">Java</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`is_deleted\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> bit</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> DEFAULT</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> b</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;是否已删除（0否 1是）&#39;</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Data</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * 是否已删除（0否 1是）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> isDeleted;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></div></div><h2 id="数据库设计" tabindex="-1">数据库设计 <a class="header-anchor" href="#数据库设计" aria-label="Permalink to &quot;数据库设计&quot;">​</a></h2>`,3),V={id:"采用utf8mb4编码",tabindex:"-1"},Q=s("a",{class:"header-anchor",href:"#采用utf8mb4编码","aria-label":'Permalink to "采用utf8mb4编码 <Badge text="建议" />"'},"​",-1),j=e('<div class="tip custom-block"><p class="custom-block-title">如果要存储特殊字符（例如：emoij表情符），使用 utf8mb4 编码。</p><p>MySQL 5.5.3 后增加了一个新的编码： <code>utf8mb4</code> ，其中 mb4 是 most bytes 4 的意思，用于兼容四字节的 unicode。</p><p><code>utf8mb4</code> 是 utf8 的超集，除了将编码改为 <code>utf8mb4</code> 外不需要做其他转换。</p><p>设计数据库时如果想要允许用户使用特殊符号，最好使用 <code>utf8mb4</code> 编码来存储，使得数据库有更好的兼容性，但是这样设计会导致耗费更多的存储空间。</p></div>',1);function G(l,W,Y,w,$,J){const t=p("Badge"),d=g,r=p("ClientOnly");return k(),o("div",null,[s("h1",D,[i("个人 SQL 优化技巧 "),a(t,{text:"持续更新",type:"warning"}),i(),C]),a(r,null,{default:y(()=>{var n,h;return[(((n=l.$frontmatter)==null?void 0:n.aside)??!0)&&(((h=l.$frontmatter)==null?void 0:h.showArticleMetadata)??!0)?(k(),A(d,{key:0,article:l.$frontmatter},null,8,["article"])):_("",!0)]}),_:1}),b,s("h3",u,[i("如果确定结果只有一条，使用 LIMIT 1 "),a(t,{text:"建议"}),i(),E]),m,s("h3",v,[i("避免隐式类型转换 "),a(t,{text:"强制",type:"danger"}),i(),B]),T,s("h3",f,[i("列名带上前缀 "),a(t,{text:"建议"}),i(),N]),x,s("h3",I,[i("非负数列添加UNSIGNED无符号约束 "),a(t,{text:"建议"}),i(),S]),L,s("h3",M,[i("合理采用整数类型 "),a(t,{text:"建议"}),i(),P]),R,s("h3",O,[i("布尔列采用bit类型 "),a(t,{text:"建议"}),i(),q]),U,s("h3",V,[i("采用utf8mb4编码 "),a(t,{text:"建议"}),i(),Q]),j])}const z=c(F,[["render",G]]);export{Z as __pageData,z as default};
