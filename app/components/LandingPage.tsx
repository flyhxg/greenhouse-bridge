'use client';

import { useEffect, useState } from "react";

type Language = "en" | "zh";

const LANG_STORAGE_KEY = "wgs-lang";

const LandingPage = () => {
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
          <div className="brand__mark">WGS</div>
          <div>
            <span className="brand__name lang lang-en">West Garden Supply</span>
            <span className="brand__name lang lang-zh">西部园艺供应</span>
            <span className="brand__tagline lang lang-en">Growing smarter, greener spaces.</span>
            <span className="brand__tagline lang lang-zh">用科技打造智慧绿色空间。</span>
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
          <a href="#compliance" className="lang lang-en">
            Compliance
          </a>
          <a href="#compliance" className="lang lang-zh">
            合规资质
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
            <p className="eyebrow lang lang-en">Trusted horticulture partner since 2004</p>
            <p className="eyebrow lang lang-zh">自2004年值得信赖的园艺合作伙伴</p>
            <h1 className="hero__headline lang lang-en">Premium greenhouse infrastructure &amp; cultivation supply chain.</h1>
            <h1 className="hero__headline lang lang-zh">温室基础设施与作物栽培供应链整体服务商。</h1>
            <p className="hero__body lang lang-en">
              West Garden Supply equips commercial growers, agri-tech startups, and municipal projects with end-to-end
              procurement, installation, and ongoing support for modern horticulture environments.
            </p>
            <p className="hero__body lang lang-zh">
              西部园艺供应为商业种植者、农业科技企业及市政项目提供覆盖采购、安装与运维的智慧园艺解决方案，实现高效、可持续的种植环境。
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
          <div className="hero__stats">
            <div className="stat">
              <span className="stat__value">320+</span>
              <span className="stat__label lang lang-en">Commercial installations</span>
              <span className="stat__label lang lang-zh">商业项目落地</span>
            </div>
            <div className="stat">
              <span className="stat__value">28</span>
              <span className="stat__label lang lang-en">U.S. states served</span>
              <span className="stat__label lang lang-zh">覆盖美国28州</span>
            </div>
            <div className="stat">
              <span className="stat__value">15%</span>
              <span className="stat__label lang lang-en">Average yield increase</span>
              <span className="stat__label lang lang-zh">平均产量提升</span>
            </div>
            <div className="stat">
              <span className="stat__value">ISO</span>
              <span className="stat__label lang lang-en">ISO 9001 &amp; 14001 certified</span>
              <span className="stat__label lang lang-zh">通过ISO 9001/14001</span>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-heading">
            <h2 className="lang lang-en">Built for resilient growers</h2>
            <h2 className="lang lang-zh">为有韧性的种植者而生</h2>
            <p className="lang lang-en">
              Headquartered in Seattle, WA with regional warehousing in Nevada and Ohio, West Garden Supply connects
              growers with dependable greenhouse infrastructure, precision irrigation, and climate control expertise.
            </p>
            <p className="lang lang-zh">
              总部位于美国华盛顿州西雅图，在内华达及俄亥俄设立区域仓储中心，为客户提供可靠的温室设施、精准灌溉与环境控制技术支持。
            </p>
          </div>
          <div className="pillars">
            <article className="pillar-card">
              <h3 className="lang lang-en">End-to-end supply chain</h3>
              <h3 className="lang lang-zh">端到端供应链</h3>
              <p className="lang lang-en">
                Sourcing, logistics, bonded warehousing, and installation oversight handled by a single accountable team.
              </p>
              <p className="lang lang-zh">统一团队负责采购、物流、保税仓储与安装监理，实现交付可控。</p>
            </article>
            <article className="pillar-card">
              <h3 className="lang lang-en">Data-led agronomy</h3>
              <h3 className="lang lang-zh">数据驱动农艺</h3>
              <p className="lang lang-en">
                Crop steering playbooks, climate recipes, and IoT monitoring help growers continuously optimize output.
              </p>
              <p className="lang lang-zh">通过栽培策略手册、气候配方与物联网监测，持续优化作物产量与品质。</p>
            </article>
            <article className="pillar-card">
              <h3 className="lang lang-en">Sustainable materials</h3>
              <h3 className="lang lang-zh">可持续材料</h3>
              <p className="lang lang-en">
                Energy-efficient glazing, recycled substrates, and water recirculation systems reduce operational footprint.
              </p>
              <p className="lang lang-zh">采用节能透光材料、再生基质与水循环系统，降低运营成本与碳排放。</p>
            </article>
          </div>
        </section>

        <section id="solutions" className="solutions">
          <div className="section-heading">
            <h2 className="lang lang-en">Solutions designed for scale</h2>
            <h2 className="lang lang-zh">面向规模化的解决方案</h2>
            <p className="lang lang-en">
              Choose from turnkey packages or co-develop with our engineering team to meet crop and compliance needs.
            </p>
            <p className="lang lang-zh">可选择标准化交钥匙方案，或与工程团队共同开发以满足作物与合规需求。</p>
          </div>
          <div className="solutions__grid">
            <article className="solution-card">
              <h3 className="lang lang-en">Glass &amp; poly greenhouses</h3>
              <h3 className="lang lang-zh">玻璃及薄膜温室</h3>
              <ul>
                <li className="lang lang-en">Custom spans from 40 ft.</li>
                <li className="lang lang-zh">可定制40英尺以上跨度。</li>
                <li className="lang lang-en">Integrated shading &amp; blackout automation.</li>
                <li className="lang lang-zh">整合遮阳与全自动黑幕系统。</li>
                <li className="lang lang-en">Seismic and snow-load engineering.</li>
                <li className="lang lang-zh">满足地震及雪载结构规范。</li>
              </ul>
            </article>
            <article className="solution-card">
              <h3 className="lang lang-en">Irrigation &amp; fertigation</h3>
              <h3 className="lang lang-zh">灌溉与营养液系统</h3>
              <ul>
                <li className="lang lang-en">Closed-loop dosing for water stewardship.</li>
                <li className="lang lang-zh">闭环加注系统保障水资源利用。</li>
                <li className="lang lang-en">Remote recipes synced to climate controls.</li>
                <li className="lang lang-zh">营养配方与环境控制远程联动。</li>
                <li className="lang lang-en">NSF-certified plumbing assemblies.</li>
                <li className="lang lang-zh">NSF认证管路组件。</li>
              </ul>
            </article>
            <article className="solution-card">
              <h3 className="lang lang-en">Smart cultivation systems</h3>
              <h3 className="lang lang-zh">智慧栽培系统</h3>
              <ul>
                <li className="lang lang-en">Sensor networks with predictive analytics.</li>
                <li className="lang lang-zh">传感网络与预测分析模型。</li>
                <li className="lang lang-en">
                  Crop steering playbooks for cannabis, leafy greens, floriculture.
                </li>
                <li className="lang lang-zh">适用于大麻、叶菜与花卉的栽培策略。</li>
                <li className="lang lang-en">GAP, USDA Organic, and GACP onboarding support.</li>
                <li className="lang lang-zh">提供GAP、USDA Organic、GACP认证辅导。</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="sustainability">
          <div className="section-heading">
            <h2 className="lang lang-en">Sustainability roadmap</h2>
            <h2 className="lang lang-zh">可持续发展路线</h2>
          </div>
          <div className="sustainability__grid">
            <article className="sustainability-card">
              <h3 className="lang lang-en">Energy modeling</h3>
              <h3 className="lang lang-zh">能源建模</h3>
              <p className="lang lang-en">
                Photovoltaic integration studies with 7-year ROI baseline for each project.
              </p>
              <p className="lang lang-zh">提供光伏系统集成评估，为项目制定7年收益模型。</p>
            </article>
            <article className="sustainability-card">
              <h3 className="lang lang-en">Water recapture</h3>
              <h3 className="lang lang-zh">水资源回收</h3>
              <p className="lang lang-en">
                Condensate reclaim and sterilization loops reduce municipal draw by up to 38%.
              </p>
              <p className="lang lang-zh">冷凝水回收与灭菌循环方案，可降低市政用水量38%。</p>
            </article>
            <article className="sustainability-card">
              <h3 className="lang lang-en">Regenerative inputs</h3>
              <h3 className="lang lang-zh">再生投入物</h3>
              <p className="lang lang-en">
                Peat-free substrates and biodegradable trellis materials protect local ecosystems.
              </p>
              <p className="lang lang-zh">采用无泥炭基质及可降解藤架材料，保护区域生态。</p>
            </article>
          </div>
        </section>

        <section className="process">
          <div className="section-heading">
            <h2 className="lang lang-en">Turnkey delivery process</h2>
            <h2 className="lang lang-zh">交钥匙交付流程</h2>
          </div>
          <ol className="process__steps">
            <li>
              <h3 className="lang lang-en">01. Discovery &amp; compliance audit</h3>
              <h3 className="lang lang-zh">01. 需求梳理与合规评估</h3>
              <p className="lang lang-en">
                Create project roadmap aligned with municipal code, USDA, and state-level mandates.
              </p>
              <p className="lang lang-zh">梳理项目蓝图，对接市政法规、USDA及州级要求。</p>
            </li>
            <li>
              <h3 className="lang lang-en">02. Engineering &amp; procurement</h3>
              <h3 className="lang lang-zh">02. 工程设计与采购</h3>
              <p className="lang lang-en">
                Finalize structural drawings, source materials, and lock production slots with vendors.
              </p>
              <p className="lang lang-zh">完成结构设计、确定物料并锁定供应商产能。</p>
            </li>
            <li>
              <h3 className="lang lang-en">03. Installation &amp; training</h3>
              <h3 className="lang lang-zh">03. 安装调试与培训</h3>
              <p className="lang lang-en">
                On-site supervision, commissioning, and operator training with bilingual specialists.
              </p>
              <p className="lang lang-zh">双语工程师现场监理、调试并提供运营培训。</p>
            </li>
            <li>
              <h3 className="lang lang-en">04. Lifecycle service</h3>
              <h3 className="lang lang-zh">04. 生命周期服务</h3>
              <p className="lang lang-en">
                Remote monitoring, preventative maintenance, and harvest analytics dashboards.
              </p>
              <p className="lang lang-zh">提供远程监控、预防性维护及产量分析看板。</p>
            </li>
          </ol>
        </section>

        <section id="compliance" className="compliance">
          <div className="section-heading">
            <h2 className="lang lang-en">Compliance &amp; credentials</h2>
            <h2 className="lang lang-zh">合规资质</h2>
            <p className="lang lang-en">
              West Garden Supply maintains transparent corporate governance and verifiable certifications to support
              regulated industries and enterprise partnerships.
            </p>
            <p className="lang lang-zh">西部园艺供应保持透明的公司治理与可验证的认证体系，支持受监管行业与企业合作。</p>
          </div>
          <div className="compliance__grid">
            <article className="compliance-card">
              <h3 className="lang lang-en">Registrations</h3>
              <h3 className="lang lang-zh">注册信息</h3>
              <ul>
                <li className="lang lang-en">State of Washington Unified Business Identifier: 604-981-227</li>
                <li className="lang lang-zh">华盛顿州统一商业编码：604-981-227</li>
                <li className="lang lang-en">D-U-N-S: 118167093</li>
                <li className="lang lang-zh">D-U-N-S编号：118167093</li>
              </ul>
            </article>
            <article className="compliance-card">
              <h3 className="lang lang-en">Certifications</h3>
              <h3 className="lang lang-zh">认证体系</h3>
              <ul>
                <li className="lang lang-en">ISO 9001:2015 Quality Management</li>
                <li className="lang lang-zh">ISO 9001:2015 质量管理体系</li>
                <li className="lang lang-en">ISO 14001:2015 Environmental Management</li>
                <li className="lang lang-zh">ISO 14001:2015 环境管理体系</li>
                <li className="lang lang-en">UL 8800 horticultural lighting partner network</li>
                <li className="lang lang-zh">UL 8800 园艺照明合作伙伴网络</li>
              </ul>
            </article>
            <article className="compliance-card">
              <h3 className="lang lang-en">Insurance &amp; assurances</h3>
              <h3 className="lang lang-zh">保险与保障</h3>
              <ul>
                <li className="lang lang-en">General liability coverage: $5M aggregate</li>
                <li className="lang lang-zh">综合责任险：总保额500万美元</li>
                <li className="lang lang-en">Workers&apos; compensation compliant in WA, NV, OH</li>
                <li className="lang lang-zh">华盛顿、内华达、俄亥俄州员工保险合规</li>
                <li className="lang lang-en">Vendor-managed inventory with SOC 2 certified partners</li>
                <li className="lang lang-zh">与通过SOC 2认证的合作伙伴提供寄售库存服务</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="testimonials">
          <div className="section-heading">
            <h2 className="lang lang-en">Client references</h2>
            <h2 className="lang lang-zh">客户推荐</h2>
          </div>
          <div className="testimonial-list">
            <article>
              <p className="lang lang-en">
                “West Garden Supply scaled our controlled environment farms from 12,000 to 60,000 sq ft with zero
                downtime. Their bilingual team ensured compliance audits in both English and Mandarin.”
              </p>
              <p className="lang lang-zh">
                “西部园艺供应帮助我们将控温农场从12,000平方英尺扩大到60,000平方英尺，期间没有任何停机。其双语团队协助完成了英语与中文的合规审核。”
              </p>
              <span className="lang lang-en">— Operations Director, Cascade Greens</span>
              <span className="lang lang-zh">— Cascade Greens 运营总监</span>
            </article>
            <article>
              <p className="lang lang-en">
                “Their fertigation automation cut nutrient variance by 22% and gave our agronomists instant visibility.”
              </p>
              <p className="lang lang-zh">“营养液自动化系统将营养波动降低了22%，团队随时掌握关键数据。”</p>
              <span className="lang lang-en">— Head Grower, Sunharvest Cooperative</span>
              <span className="lang lang-zh">— Sunharvest Cooperative 首席种植师</span>
            </article>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-heading">
            <h2 className="lang lang-en">Let’s build your next cultivation site</h2>
            <h2 className="lang lang-zh">携手打造您的下一座智慧农场</h2>
            <p className="lang lang-en">
              Submit an RFQ, schedule a technical workshop, or request corporate documentation tailored for Google or
              Apple developer onboarding.
            </p>
            <p className="lang lang-zh">欢迎提交询价、预约技术研讨，或索取用于Google/Apple开发者审核的公司资料。</p>
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
              <h3 className="lang lang-en">Warehousing &amp; logistics</h3>
              <h3 className="lang lang-zh">仓储与物流中心</h3>
              <p className="lang lang-en">Reno, NV · Columbus, OH</p>
              <p className="lang lang-zh">美国内华达州里诺 · 俄亥俄州哥伦布</p>
              <p className="lang lang-en">Same-day fulfillment for priority SKUs across West &amp; Midwest regions.</p>
              <p className="lang lang-zh">优先SKU可在美国西部及中西部实现当日发货。</p>
            </div>
            <div className="contact__card">
              <h3 className="lang lang-en">Contact</h3>
              <h3 className="lang lang-zh">联系方式</h3>
              <p>
                <a href="tel:+12069803370">+1 (206) 980-3370</a>
                <br />
                <a href="mailto:hello@westgardensupply.com">hello@westgardensupply.com</a>
              </p>
              <p className="lang lang-en">We typically respond within one business day.</p>
              <p className="lang lang-zh">通常在一个工作日内回复。</p>
              <a
                className="btn btn--ghost lang lang-en"
                href="mailto:hello@westgardensupply.com?subject=Partnership%20Inquiry"
              >
                Email our team
              </a>
              <a
                className="btn btn--ghost lang lang-zh"
                href="mailto:hello@westgardensupply.com?subject=%E5%90%88%E4%BD%9C%E9%97%AE%E8%AF%A2"
              >
                发送邮件
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div>
          <span className="lang lang-en">© 2025 West Garden Supply. All rights reserved.</span>
          <span className="lang lang-zh">© 2025 西部园艺供应。保留所有权利。</span>
        </div>
        <div className="footer-links">
          <a className="lang lang-en" href="#compliance">
            Corporate compliance
          </a>
          <a className="lang lang-zh" href="#compliance">
            公司合规
          </a>
          <a className="lang lang-en" href="mailto:legal@westgardensupply.com">
            legal@westgardensupply.com
          </a>
          <a className="lang lang-zh" href="mailto:legal@westgardensupply.com">
            legal@westgardensupply.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
