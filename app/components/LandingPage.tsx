'use client';

import Image from "next/image";
import type { FC } from "react";
import { useEffect, useState } from "react";

type Language = "en" | "zh";

const LANG_STORAGE_KEY = "wgs-lang";

const LandingPage: FC = () => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = (() => {
      try {
        return window.localStorage.getItem(LANG_STORAGE_KEY) as Language | null;
      } catch {
        return null;
      }
    })();

    if (stored === "en" || stored === "zh") {
      setLanguage(stored);
      return;
    }

    const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith("zh")) {
      setLanguage("zh");
    }
  }, []);

  useEffect(() => {
    document.body.dataset.lang = language;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, language);
    } catch {
      // Ignore storage failures (private mode, disabled storage, etc.)
    }
  }, [language]);

  return (
    <>
      <a className="skip-link lang lang-en" href="#main-content">
        Skip to content
      </a>
      <a className="skip-link lang lang-zh" href="#main-content">
        跳转到内容
      </a>
      <header className="site-header">
        <div className="brand">
          <div className="brand__logo" aria-hidden="true" role="presentation">
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="wgs-gradient" x1="15%" x2="90%" y1="10%" y2="85%">
                  <stop stopColor="#7fb0ff" stopOpacity="0.9" offset="0%" />
                  <stop stopColor="#2759ff" stopOpacity="1" offset="60%" />
                  <stop stopColor="#1b3ecf" stopOpacity="1" offset="100%" />
                </linearGradient>
                <linearGradient id="wgs-sheen" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop stopColor="#e5edff" stopOpacity="0.95" offset="0%" />
                  <stop stopColor="#c7d8ff" stopOpacity="0.2" offset="60%" />
                  <stop stopColor="#7fb0ff" stopOpacity="0" offset="100%" />
                </linearGradient>
              </defs>
              <g strokeWidth="8" fill="none">
                <circle cx="60" cy="60" r="48" stroke="url(#wgs-gradient)" />
                <path
                  d="M24 70c10 10 23 16 36 16 13 0 24-5 36-16"
                  stroke="url(#wgs-sheen)"
                  strokeLinecap="round"
                />
                <path
                  d="M36 44c6.5 14 14 22 24 22 9.5 0 18-8 24-22"
                  stroke="url(#wgs-gradient)"
                  strokeLinecap="round"
                />
              </g>
              <g fill="none" stroke="#0f172a" strokeWidth="5" strokeLinecap="round">
                <path d="M40 44c4 8 8 12 14 12" />
                <path d="M52 72c5 4 10 6 16 6" />
              </g>
            </svg>
          </div>
          <div>
            <span className="brand__name lang lang-en">Wavelength Global Studio</span>
            <span className="brand__name lang lang-zh">维浪全球工作室</span>
            <span className="brand__tagline lang lang-en">Building social-grade software with precision.</span>
            <span className="brand__tagline lang lang-zh">以工程化精度打造社交级软件。</span>
          </div>
        </div>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#about" className="lang lang-en">
            About
          </a>
          <a href="#about" className="lang lang-zh">
            公司简介
          </a>
          <a href="#solutions" className="lang lang-en">
            Solutions
          </a>
          <a href="#solutions" className="lang lang-zh">
            解决方案
          </a>
          <a href="#contact" className="lang lang-en">
            Contact
          </a>
          <a href="#contact" className="lang lang-zh">
            联系我们
          </a>
        </nav>
        <div className="lang-switcher" role="group" aria-label="Language selector">
          <button
            type="button"
            data-lang="en"
            aria-pressed={language === "en"}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            type="button"
            data-lang="zh"
            aria-pressed={language === "zh"}
            onClick={() => setLanguage("zh")}
          >
            中文
          </button>
        </div>
      </header>
      <main id="main-content">
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow lang lang-en">Remote-first product studio for social experiences</p>
            <p className="eyebrow lang lang-zh">专注社交体验的远程化产品工作室</p>
            <h1 className="hero__headline lang lang-en">Social-first software without physical goods.</h1>
            <h1 className="hero__headline lang lang-zh">纯线上交付的社交型软件服务。</h1>
            <p className="hero__body lang lang-en">
              We design, build, and optimize mobile and web applications—community feeds, messaging, creator tools, and bespoke digital platforms—delivered entirely online with continuous support.
            </p>
            <p className="hero__body lang lang-zh">
              我们提供移动端与网页端应用的设计、开发与优化，包括社区互动、即时通讯、创作者工具及定制化数字平台，全程在线交付并持续运维。
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary lang lang-en" href="#solutions">
                Explore Solutions
              </a>
              <a className="btn btn--primary lang lang-zh" href="#solutions">
                了解解决方案
              </a>
              <a className="btn btn--secondary lang lang-en" href="#contact">
                Request Partnership Deck
              </a>
              <a className="btn btn--secondary lang lang-zh" href="#contact">
                索取合作方案
              </a>
            </div>
          </div>
          <div className="hero__visual-stack">
            <div className="hero__visual">
              <div className="hero__note">
                <p className="hero__note-kicker lang lang-en">Company principles</p>
                <p className="hero__note-kicker lang lang-zh">公司理念</p>
                <h3 className="hero__note-title lang lang-en">Purely online, social-grade delivery.</h3>
                <h3 className="hero__note-title lang lang-zh">纯线上交付的社交型软件服务。</h3>
                <p className="hero__note-body lang lang-en">
                  We design, build, and optimize mobile and web apps for community interaction, messaging, creator tools,
                  and bespoke digital platforms—delivered fully online with ongoing operations.
                </p>
                <p className="hero__note-body lang lang-zh">
                  我们提供移动端与网页端应用的设计、开发与优化，包括社区互动、即时通讯、创作者工具及定制化数字平台，全程在线交付并
                  持续运维。
                </p>
                <ul className="hero__note-list">
                  <li className="lang lang-en">
                    <span>Community interactions</span>
                    <small>Feeds, forums, and live rooms crafted for engagement.</small>
                  </li>
                  <li className="lang lang-zh">
                    <span>社区互动体验</span>
                    <small>动态、论坛与直播工具，提升用户参与度。</small>
                  </li>
                  <li className="lang lang-en">
                    <span>Messaging &amp; trust</span>
                    <small>Secure chat, moderation, and safety guardrails included.</small>
                  </li>
                  <li className="lang lang-zh">
                    <span>通讯与安全</span>
                    <small>安全聊天、审核与信任机制一体化配置。</small>
                  </li>
                  <li className="lang lang-en">
                    <span>Creator-ready platforms</span>
                    <small>Publishing, analytics, and monetization that ship quickly.</small>
                  </li>
                  <li className="lang lang-zh">
                    <span>创作者友好平台</span>
                    <small>发布、数据与变现能力快速上线。</small>
                  </li>
                </ul>
              </div>
              <figure className="hero__visual-card">
                <Image
                  className="hero__image hero__image--primary"
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=85"
                  alt="Remote product team aligning on interface layouts"
                  width={1200}
                  height={800}
                  priority
                  sizes="(max-width: 992px) 100vw, 540px"
                />
                <figcaption className="lang lang-en">UI/UX co-creation sprint</figcaption>
                <figcaption className="lang lang-zh">界面共创冲刺</figcaption>
              </figure>
              <figure className="hero__visual-card hero__visual-card--secondary">
                <Image
                  className="hero__image hero__image--secondary"
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85"
                  alt="Analytics dashboard tracking community engagement"
                  width={1100}
                  height={740}
                  loading="lazy"
                  sizes="(max-width: 992px) 100vw, 460px"
                />
                <figcaption className="lang lang-en">Realtime engagement analytics</figcaption>
                <figcaption className="lang lang-zh">实时互动分析</figcaption>
              </figure>
              <div className="hero__badge">
                <span className="hero__badge-label lang lang-en">End-to-end delivery</span>
                <span className="hero__badge-label lang lang-zh">一站式远程交付</span>
                <strong>100% Digital</strong>
              </div>
            </div>
            <div className="hero__stats">
              <div className="stat">
                <span className="stat__value">180+</span>
                <span className="stat__label lang lang-en">Apps &amp; platforms launched</span>
                <span className="stat__label lang lang-zh">上线应用与平台</span>
              </div>
              <div className="stat">
                <span className="stat__value">12</span>
                <span className="stat__label lang lang-en">Markets served remotely</span>
                <span className="stat__label lang lang-zh">远程服务覆盖市场</span>
              </div>
              <div className="stat">
                <span className="stat__value">99.9%</span>
                <span className="stat__label lang lang-en">Uptime SLO for managed products</span>
                <span className="stat__label lang lang-zh">托管产品在线率SLO</span>
              </div>
              <div className="stat">
                <span className="stat__value">24/7</span>
                <span className="stat__label lang lang-en">Global, online-only support</span>
                <span className="stat__label lang lang-zh">全球纯线上支持</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-heading">
            <h2 className="lang lang-en">Built for digital-first brands</h2>
            <h2 className="lang lang-zh">为数字化品牌而生</h2>
            <p className="lang lang-en">
              Based in Seattle with a fully remote delivery model, we help founders and enterprises launch social products
              faster—covering UI/UX, engineering, cloud infrastructure, and growth experimentation.
            </p>
            <p className="lang lang-zh">
              团队总部位于西雅图，采用完全远程交付模式，为初创与企业客户提供社交产品的设计、研发、云架构与增长实验，帮助更快上线。
            </p>
          </div>
          <div className="pillars">
            <article className="pillar-card">
              <h3 className="lang lang-en">Product strategy to launch</h3>
              <h3 className="lang lang-zh">策略到上线一站式</h3>
              <p className="lang lang-en">
                Research, prototyping, design systems, development, and release management all handled by one accountable
                team.
              </p>
              <p className="lang lang-zh">一支团队完成用户研究、原型、设计系统、开发与发布管理，统一负责。</p>
            </article>
            <article className="pillar-card">
              <h3 className="lang lang-en">Data-led product growth</h3>
              <h3 className="lang lang-zh">数据驱动的产品增长</h3>
              <p className="lang lang-en">
                Analytics pipelines, experimentation, and personalization keep communities engaged and retention high.
              </p>
              <p className="lang lang-zh">通过数据管道、实验与个性化，提升社区活跃度与留存。</p>
            </article>
            <article className="pillar-card">
              <h3 className="lang lang-en">Secure, scalable delivery</h3>
              <h3 className="lang lang-zh">安全可扩展交付</h3>
              <p className="lang lang-en">
                Cloud-native architectures, privacy-first data practices, and automated QA ensure reliability from day one.
              </p>
              <p className="lang lang-zh">云原生架构、隐私优先的数据实践与自动化测试，保障上线即可靠。</p>
            </article>
          </div>
        </section>

        <section id="solutions" className="solutions">
          <div className="section-heading">
            <h2 className="lang lang-en">Digital solutions for modern engagement</h2>
            <h2 className="lang lang-zh">面向现代互动的数字方案</h2>
            <p className="lang lang-en">Pick a turnkey package or co-build a roadmap with our engineers and designers.</p>
            <p className="lang lang-zh">可选择标准化方案，或与工程与设计团队共创产品路线图。</p>
          </div>
          <div className="solutions__grid">
            <article className="solution-card">
              <h3 className="lang lang-en">Mobile app development</h3>
              <h3 className="lang lang-zh">移动应用开发</h3>
              <ul>
                <li className="lang lang-en">iOS, Android, and cross-platform builds with shared design systems.</li>
                <li className="lang lang-zh">支持 iOS、Android 及跨端开发，统一设计系统。</li>
                <li className="lang lang-en">Messaging, notifications, and content moderation baked in.</li>
                <li className="lang lang-zh">内置消息、通知与内容治理能力。</li>
                <li className="lang lang-en">App Store and Play Store launch readiness packages.</li>
                <li className="lang lang-zh">提供 App Store 与 Play Store 上线准备服务。</li>
              </ul>
            </article>
            <article className="solution-card">
              <h3 className="lang lang-en">Web &amp; platform apps</h3>
              <h3 className="lang lang-zh">网页与平台应用</h3>
              <ul>
                <li className="lang lang-en">Responsive web apps, admin portals, and creator dashboards.</li>
                <li className="lang lang-zh">响应式网页应用、管理后台与创作者看板。</li>
                <li className="lang lang-en">API-first architectures with cloud-native observability.</li>
                <li className="lang lang-zh">API 优先的云原生架构，具备可观测性。</li>
                <li className="lang lang-en">Accessibility and localization baked into every release.</li>
                <li className="lang lang-zh">每次发布均考虑无障碍与多语言。</li>
              </ul>
            </article>
            <article className="solution-card">
              <h3 className="lang lang-en">Social &amp; community systems</h3>
              <h3 className="lang lang-zh">社交与社区系统</h3>
              <ul>
                <li className="lang lang-en">Feeds, chat, live events, and UGC tooling built to scale safely.</li>
                <li className="lang lang-zh">动态、聊天、直播与UGC工具，兼顾扩展性与安全。</li>
                <li className="lang lang-en">Trust &amp; safety workflows, reporting, and AI-assisted moderation.</li>
                <li className="lang lang-zh">信任与安全流程、举报机制及AI辅助审核。</li>
                <li className="lang lang-en">Growth loops integrated with analytics and CRM stacks.</li>
                <li className="lang lang-zh">结合数据分析与CRM的增长闭环设计。</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="gallery">
          <div className="section-heading">
            <h2 className="lang lang-en">Product visuals from recent launches</h2>
            <h2 className="lang lang-zh">近期上线项目的产品视觉</h2>
            <p className="lang lang-en">Screens from remote workshops, beta dashboards, and community experiences.</p>
            <p className="lang lang-zh">展示远程工作坊、测试版控制台与社区体验的截屏。</p>
          </div>
          <div className="gallery__grid" role="list">
            <figure className="gallery__card" role="listitem">
              <Image
                className="gallery__image"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
                alt="Mobile social app prototype displayed on multiple devices"
                width={1200}
                height={780}
                loading="lazy"
                sizes="(max-width: 992px) 100vw, 480px"
              />
              <figcaption>
                <span className="lang lang-en">Cross-platform social commerce flows for launch readiness.</span>
                <span className="lang lang-zh">跨平台社交电商流程，确保上线准备充分。</span>
              </figcaption>
            </figure>
            <figure className="gallery__card" role="listitem">
              <Image
                className="gallery__image"
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=85"
                alt="Team collaborating via virtual whiteboard"
                width={1200}
                height={780}
                loading="lazy"
                sizes="(max-width: 992px) 100vw, 480px"
              />
              <figcaption>
                <span className="lang lang-en">Remote ideation boards connecting Pacific and Asia teams.</span>
                <span className="lang lang-zh">连接太平洋与亚洲团队的远程头脑风暴白板。</span>
              </figcaption>
            </figure>
            <figure className="gallery__card" role="listitem">
              <Image
                className="gallery__image"
                src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=85"
                alt="Analytics dashboard showing retention metrics"
                width={1200}
                height={780}
                loading="lazy"
                sizes="(max-width: 992px) 100vw, 480px"
              />
              <figcaption>
                <span className="lang lang-en">Engagement telemetry dashboards with privacy-safe metrics.</span>
                <span className="lang lang-zh">隐私友好的互动遥测仪表盘。</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="sustainability">
          <div className="section-heading">
            <h2 className="lang lang-en">Reliability &amp; trust</h2>
            <h2 className="lang lang-zh">可靠性与信任</h2>
          </div>
          <div className="sustainability__grid">
            <article className="sustainability-card">
              <h3 className="lang lang-en">Architecture reviews</h3>
              <h3 className="lang lang-zh">架构评审</h3>
              <p className="lang lang-en">Cloud cost modeling, performance budgets, and scalability drills before launch.</p>
              <p className="lang lang-zh">上线前进行云成本模型、性能预算与扩展性演练。</p>
            </article>
            <article className="sustainability-card">
              <h3 className="lang lang-en">Privacy &amp; security</h3>
              <h3 className="lang lang-zh">隐私与安全</h3>
              <p className="lang lang-en">Secure SDLC practices, PII minimization, and third-party security reviews.</p>
              <p className="lang lang-zh">采用安全开发流程、最小化个人信息收集，并进行第三方安全审查。</p>
            </article>
            <article className="sustainability-card">
              <h3 className="lang lang-en">Accessibility by default</h3>
              <h3 className="lang lang-zh">默认无障碍体验</h3>
              <p className="lang lang-en">WCAG-aligned patterns, multi-language support, and inclusive content standards.</p>
              <p className="lang lang-zh">遵循 WCAG 的设计模式，支持多语言与包容性内容标准。</p>
            </article>
          </div>
        </section>

        <section className="process">
          <div className="section-heading">
            <h2 className="lang lang-en">Delivery process</h2>
            <h2 className="lang lang-zh">交付流程</h2>
          </div>
          <ol className="process__steps">
            <li>
              <h3 className="lang lang-en">01. Discovery &amp; technical audit</h3>
              <h3 className="lang lang-zh">01. 需求梳理与技术评估</h3>
              <p className="lang lang-en">Define goals, target users, and integration surfaces.</p>
              <p className="lang lang-zh">明确目标、用户画像与系统对接范围。</p>
            </li>
            <li>
              <h3 className="lang lang-en">02. Experience &amp; architecture</h3>
              <h3 className="lang lang-zh">02. 体验与架构设计</h3>
              <p className="lang lang-en">Deliver user journeys, prototypes, and a technical blueprint for scalable builds.</p>
              <p className="lang lang-zh">输出用户旅程、原型以及可扩展的技术蓝图。</p>
            </li>
            <li>
              <h3 className="lang lang-en">03. Build &amp; launch</h3>
              <h3 className="lang lang-zh">03. 开发与上线</h3>
              <p className="lang lang-en">Sprint-based development, QA automation, and go-live playbooks for app stores and web.</p>
              <p className="lang lang-zh">以冲刺节奏完成开发与自动化测试，按照上线手册发布至应用商店和网页。</p>
            </li>
            <li>
              <h3 className="lang lang-en">04. Care &amp; optimization</h3>
              <h3 className="lang lang-zh">04. 运营与优化</h3>
              <p className="lang lang-en">A/B testing, reliability reviews, and growth experiments keep products evolving.</p>
              <p className="lang lang-zh">通过 A/B 测试、可靠性评审与增长实验，持续迭代产品。</p>
            </li>
          </ol>
        </section>

        <section className="testimonials">
          <div className="section-heading">
            <h2 className="lang lang-en">Client references</h2>
            <h2 className="lang lang-zh">客户推荐</h2>
          </div>
          <div className="testimonial-list">
            <article>
              <p className="lang lang-en">
                “They launched our social commerce app in under 90 days—messaging, live rooms, and moderation included—
                without us managing any physical inventory.”
              </p>
              <p className="lang lang-zh">
                “他们在90天内交付了我们的社交电商应用，聊天、直播、审核全都上线，我们完全无需管理任何实体库存。”
              </p>
              <span className="lang lang-en">— COO, NovaLink Networks</span>
              <span className="lang lang-zh">— NovaLink Networks 首席运营官</span>
            </article>
            <article>
              <p className="lang lang-en">
                “Their analytics and A/B testing framework helped us grow weekly active users by 28% while keeping trust &amp;
                safety tightly controlled.”
              </p>
              <p className="lang lang-zh">“他们的分析与 A/B 测试框架让周活提升了28%，同时保持了严格的安全治理。”</p>
              <span className="lang lang-en">— Product Lead, LumenStack</span>
              <span className="lang lang-zh">— LumenStack 产品负责人</span>
            </article>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-heading">
            <h2 className="lang lang-en">Let’s ship your next digital product</h2>
            <h2 className="lang lang-zh">携手上线您的下一个数字产品</h2>
            <p className="lang lang-en">Submit a project brief, schedule a remote workshop, or request estimates for your roadmap.</p>
            <p className="lang lang-zh">欢迎提交项目简介、预约远程研讨，或索取路线图的时间与成本评估。</p>
          </div>
          <div className="contact__grid">
            <div className="contact__card">
              <h3 className="lang lang-en">Headquarters</h3>
              <h3 className="lang lang-zh">公司总部</h3>
              <p className="lang lang-en">
                2324 Westlake Ave N, Suite 701
                <br />
                Seattle, WA 98109 USA
              </p>
              <p className="lang lang-zh">
                2324 Westlake Ave N, Suite 701
                <br />
                Seattle, WA 98109 美国
              </p>
              <p className="lang lang-en">Mon–Fri, 8:30am – 6:00pm (Pacific)</p>
              <p className="lang lang-zh">周一至周五，太平洋时间 8:30–18:00</p>
            </div>
            <div className="contact__card">
              <h3 className="lang lang-en">Remote delivery</h3>
              <h3 className="lang lang-zh">远程交付</h3>
              <p className="lang lang-en">Distributed teams across Pacific and Asia time zones.</p>
              <p className="lang lang-zh">分布式团队覆盖太平洋与亚洲时区。</p>
              <p className="lang lang-en">All services delivered online—no physical goods or on-prem inventory.</p>
              <p className="lang lang-zh">全部服务均在线交付，不涉及任何实体商品或本地库存。</p>
            </div>
            <div className="contact__card">
              <h3 className="lang lang-en">Contact</h3>
              <h3 className="lang lang-zh">联系方式</h3>
              <p>
                <a href="mailto:contact@westgardensupply.com">contact@westgardensupply.com</a>
              </p>
              <p className="lang lang-en">We typically respond within one business day.</p>
              <p className="lang lang-zh">通常在一个工作日内回复。</p>
              <a
                className="btn btn--ghost lang lang-en"
                href="mailto:contact@westgardensupply.com?subject=Partnership%20Inquiry"
              >
                Email our team
              </a>
              <a
                className="btn btn--ghost lang lang-zh"
                href="mailto:contact@westgardensupply.com?subject=%E5%90%88%E4%BD%9C%E9%97%AE%E8%AF%A2"
              >
                发送邮件
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div>
          <span className="lang lang-en">© 2025 Wavelength Global Studio. All rights reserved.</span>
          <span className="lang lang-zh">© 2025 维浪全球工作室。保留所有权利。</span>
        </div>
        <div className="footer-links">
          <a className="lang lang-en" href="mailto:contact@westgardensupply.com">
            contact@westgardensupply.com
          </a>
          <a className="lang lang-zh" href="mailto:contact@westgardensupply.com">
            contact@westgardensupply.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
