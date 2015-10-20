


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>eligrey/canvas-toBlob.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="eligrey/canvas-toBlob.js" name="twitter:title" /><meta content="canvas-toBlob.js - A canvas.toBlob() implementation" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/46995?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/46995?v=3&amp;s=400" property="og:image" /><meta content="eligrey/canvas-toBlob.js" property="og:title" /><meta content="https://github.com/eligrey/canvas-toBlob.js" property="og:url" /><meta content="canvas-toBlob.js - A canvas.toBlob() implementation" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4BA37452:0D1B:1ADF63D3:562445EB" name="octolytics-dimension-request_id" />

<meta content="Rails, view, files#disambiguate" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="7791e670a9c0289a85247be4623e9214b529b2c4" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-1c72e5e1cbdeae0d6a25ee0e6f07ae0100db5696d3f5f10ed2acf1f0885ef5f0.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-91f10774cc492e563a1bcd77a9b935a21bffbda4c7fefb5ed448d51a53217852.css" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="aaf0a95e6a9bf84b40427e5620ea23c2">

      
  <meta name="description" content="canvas-toBlob.js - A canvas.toBlob() implementation">
  <meta name="go-import" content="github.com/eligrey/canvas-toBlob.js git https://github.com/eligrey/canvas-toBlob.js.git">

  <meta content="46995" name="octolytics-dimension-user_id" /><meta content="eligrey" name="octolytics-dimension-user_login" /><meta content="2051197" name="octolytics-dimension-repository_id" /><meta content="eligrey/canvas-toBlob.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2051197" name="octolytics-dimension-repository_network_root_id" /><meta content="eligrey/canvas-toBlob.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/eligrey/canvas-toBlob.js/commits/master.atom" rel="alternate" title="Recent Commits to canvas-toBlob.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production linux vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Feligrey%2Fcanvas-toBlob.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eligrey/canvas-toBlob.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/eligrey/canvas-toBlob.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Feligrey%2Fcanvas-toBlob.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/eligrey/canvas-toBlob.js/watchers">
    22
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Feligrey%2Fcanvas-toBlob.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/eligrey/canvas-toBlob.js/stargazers">
      217
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Feligrey%2Fcanvas-toBlob.js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/eligrey/canvas-toBlob.js/network" class="social-count">
      51
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/eligrey" class="url fn" itemprop="url" rel="author"><span itemprop="title">eligrey</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/eligrey/canvas-toBlob.js" data-pjax="#js-repo-pjax-container">canvas-toBlob.js</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/eligrey/canvas-toBlob.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/eligrey/canvas-toBlob.js" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /eligrey/canvas-toBlob.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/eligrey/canvas-toBlob.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /eligrey/canvas-toBlob.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/eligrey/canvas-toBlob.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /eligrey/canvas-toBlob.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/eligrey/canvas-toBlob.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /eligrey/canvas-toBlob.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/eligrey/canvas-toBlob.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /eligrey/canvas-toBlob.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/eligrey/canvas-toBlob.js.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/eligrey/canvas-toBlob.js" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="7791e670a9c0289a85247be4623e9214b529b2c4" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sAGvKYhpww+d8LsbW/4a7E1l8Vu8+I3ppukpnOgZuis2lpGy+Lgza6yEatHmwVxqhVCxQ8gB2eyC6dg0aSreuA==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="7791e670a9c0289a85247be4623e9214b529b2c4" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Q6qR/u+V02GEcpN0+gs7L4tukQBwoWXL1gUWtTAnj82V3bRem/gUwugC5gfGD9P2Smheep8y7IFi+gRU6oMNXw==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>

              <a href="/eligrey/canvas-toBlob.js/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of eligrey/canvas-toBlob.js as a zip file"
                 title="Download the contents of eligrey/canvas-toBlob.js as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          
<span id="js-show-full-navigation"></span>

  <div class="repository-meta js-details-container ">
    <div class="repository-description">
      A canvas.toBlob() implementation
    </div>


</div>


<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/eligrey/canvas-toBlob.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              26
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/eligrey/canvas-toBlob.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/eligrey/canvas-toBlob.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            0
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/eligrey/canvas-toBlob.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      3
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/eligrey/canvas-toBlob.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100.0%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 100.0%" style="width:100.0%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
  </div>

<include-fragment src="/eligrey/canvas-toBlob.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

  <div class="file-navigation in-mid-page">
  <a href="/eligrey/canvas-toBlob.js/find/master"
        class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files"
        data-ga-click="Repository, find file, location:repo overview">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/eligrey/canvas-toBlob.js/compare" aria-label="Compare, review, create a pull request" class="btn btn-sm btn-primary tooltipped tooltipped-se left compare-button" aria-label="Compare &amp; review" data-pjax data-ga-click="Repository, go to compare view, location:repo overview; icon:git-compare">
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/eligrey/canvas-toBlob.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


  <div class="breadcrumb"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eligrey/canvas-toBlob.js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">canvas-toBlob.js</span></a></span></span><span class="separator">/</span>
  <span class="tooltipped tooltipped-e disabled text-muted" aria-label="You must be signed in to make or propose changes">
    <span class="octicon octicon-plus"></span>
  </span>
</div>
</div>





  <div class="commit-tease js-details-container">
    <span class="right">
      Latest commit
      <a class="commit-tease-sha" href="/eligrey/canvas-toBlob.js/commit/8316fb3ee6d67f68f44089a82ab87bf580d2a5e3" data-pjax>
        8316fb
      </a>
      <time datetime="2015-10-15T18:00:15Z" is="relative-time">Oct 15, 2015</time>
    </span>


    <span>
      <img alt="@eligrey" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/46995?v=3&amp;s=40" width="20" />
      <a href="/eligrey" class="user-mention" rel="author">eligrey</a></span>


        <a href="/eligrey/canvas-toBlob.js/commit/8316fb3ee6d67f68f44089a82ab87bf580d2a5e3" class="message" data-pjax="true" title="License clarification">License clarification</a>
    </span>

  </div>


<div class="file-wrap">
  <a href="/eligrey/canvas-toBlob.js/tree/8316fb3ee6d67f68f44089a82ab87bf580d2a5e3" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/eligrey/canvas-toBlob.js/blob/master/LICENSE.md" class="js-directory-link js-navigation-open" id="37854d19817c792316d481f5beb93cc7-a2402adc139e030db7aa3fdb763fe6bfa1e26953" title="LICENSE.md">LICENSE.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/eligrey/canvas-toBlob.js/commit/8afc1473b898508c96fdab5685fe845777ff3485" class="message" data-pjax="true" title="License clarification">License clarification</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-15T18:00:03Z" is="time-ago">Oct 15, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/eligrey/canvas-toBlob.js/blob/master/README.md" class="js-directory-link js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-b022f26e60562a343bd34f6b29b49eed123c26f3" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/eligrey/canvas-toBlob.js/commit/98992e3b5d8ebb3e7d2169bf4598c38499278ef4" class="message" data-pjax="true" title="Fix case">Fix case</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-11-30T01:18:31Z" is="time-ago">Nov 29, 2014</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/eligrey/canvas-toBlob.js/blob/master/canvas-toBlob.js" class="js-directory-link js-navigation-open" id="390eb5e18d198b58bd53e0662732eb58-6d895a78521d644de51fb02f641b5462fa8ab375" title="canvas-toBlob.js">canvas-toBlob.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/eligrey/canvas-toBlob.js/commit/8316fb3ee6d67f68f44089a82ab87bf580d2a5e3" class="message" data-pjax="true" title="License clarification">License clarification</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-15T18:00:15Z" is="time-ago">Oct 15, 2015</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-canvas-toblobjs" class="anchor" href="#canvas-toblobjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>canvas-toBlob.js</h1>

<p>canvas-toBlob.js implements the standard HTML5 <a href="http://www.w3.org/TR/html5/the-canvas-element.html"><code>canvas.toBlob()</code></a> and
<code>canvas.toBlobHD()</code> methods in browsers that do not natively support it. canvas-toBlob.js
requires <code>Blob</code> support to function, which is not present in all browsers. <a href="https://github.com/eligrey/Blob.js">Blob.js</a>
is a cross-browser <code>Blob</code> implementation that solves this.</p>

<h2><a id="user-content-supported-browsers" class="anchor" href="#supported-browsers" aria-hidden="true"><span class="octicon octicon-link"></span></a>Supported browsers</h2>

<p>canvas-toBlob.js has <a href="https://github.com/eligrey/FileSaver.js#supported-browsers">the same browser support as FileSaver.js</a>.</p>

<p><a href="https://camo.githubusercontent.com/e45db383ed87f57d340c88f92da60eb35a29cb04/68747470733a2f2f696e2e676574636c69636b792e636f6d2f3231323731326e732e676966" target="_blank"><img src="https://camo.githubusercontent.com/e45db383ed87f57d340c88f92da60eb35a29cb04/68747470733a2f2f696e2e676574636c69636b792e636f6d2f3231323731326e732e676966" alt="Tracking image" data-canonical-src="https://in.getclicky.com/212712ns.gif" style="max-width:100%;"></a></p>
</article>
  </div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.03942s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-080f1c155a28f5a4315d4a6862aeafb7e27bca0a74db6f7ae9e0048e321369d1.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-ac033f0062bd3f47c468d3da839d615dff91cfcf0e416ea0a0099fbcd4483aba.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

