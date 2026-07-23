// common-nav.js
document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. Sidebar Navigation (if <aside> element exists)
    // -------------------------------------------------------------
    const aside = document.querySelector("aside");
    if (aside) {
        // Apply the standardized dark background and border from the second image
        aside.style.backgroundColor = "#101415";
        aside.style.borderRight = "1px solid rgba(255, 255, 255, 0.05)";

        // Define all navigation items (pages)
        // To add a new page in the future, just add it here!
        const navItems = [
            {
                name: "Dashboard",
                path: "../live_score_dashboard_premium_dark/code.html",
                icon: "dashboard",
                pattern: "live_score_dashboard_premium_dark"
            },
            {
                name: "Tournaments",
                path: "../sports_categories_explorer/code.html",
                icon: "emoji_events",
                pattern: "sports_categories_explorer"
            },
            {
                name: "Insights",
                path: "../professional_sports_news_blog/code.html",
                icon: "newspaper",
                pattern: "professional_sports_news_blog"
            },
            {
                name: "Media Gallery",
                path: "../professional_sports_media_gallery/code.html",
                icon: "image",
                pattern: "professional_sports_media_gallery"
            },
            {
                name: "Teams",
                path: "../professional_team_directory/code.html",
                icon: "groups",
                pattern: "professional_team_directory"
            },
            {
                name: "Players",
                path: "../professional_athlete_profile/code.html",
                icon: "person",
                pattern: "professional_athlete_profile"
            },
            {
                name: "Analytics",
                path: "../organizer_dashboard/code.html",
                icon: "analytics",
                pattern: "organizer_dashboard"
            },
            {
                name: "FAQ Center",
                path: "../professional_faq_center/code.html",
                icon: "contact_support",
                pattern: "professional_faq_center"
            }
        ];

        const currentPath = window.location.pathname;

        // Determine styles based on current page's theme/context
        let activeClasses = "";
        let inactiveClasses = "";

        if (currentPath.includes("live_score_dashboard_premium_dark") || currentPath.includes("organizer_dashboard")) {
            activeClasses = "bg-primary/10 text-primary-fixed-dim border-r-4 border-primary-fixed-dim font-bold";
            inactiveClasses = "text-secondary-fixed-dim hover:text-white hover:bg-on-secondary-fixed-variant";
        } else {
            // Standard green highlight for all other pages
            activeClasses = "bg-primary/10 text-primary border-r-4 border-primary font-bold";

            if (
                currentPath.includes("sports_categories_explorer") ||
                currentPath.includes("professional_team_directory") ||
                currentPath.includes("premium_contact_center") ||
                currentPath.includes("premium_article_detail_page")
            ) {
                inactiveClasses = "text-on-surface-variant hover:text-white hover:bg-surface-variant/20";
            } else {
                inactiveClasses = "text-on-surface-variant hover:text-white hover:bg-surface-container-highest";
            }
        }

        // Determine margins based on layout requirements per page
        let marginClass = "";
        if (currentPath.includes("organizer_dashboard")) {
            marginClass = "mx-4";
        } else if (currentPath.includes("professional_faq_center")) {
            marginClass = "mx-2";
        }

        // Generate menu links HTML
        const linksHTML = navItems.map(item => {
            const isActive = new RegExp(item.pattern).test(currentPath);
            const classes = `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer active:scale-95 ${marginClass} ${isActive ? activeClasses : inactiveClasses}`;
            const iconStyle = isActive ? "font-variation-settings: 'FILL' 1;" : "";

            return `
                <a class="${classes}" href="${item.path}">
                    <span class="material-symbols-outlined" style="${iconStyle}">${item.icon}</span>
                    <span class="font-label-md text-label-md">${item.name}</span>
                </a>
            `;
        }).join("");

        // Determine Support active state (Support links to the Contact Us page)
        const isSupportActive = currentPath.includes("premium_contact_center");
        const supportClasses = `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer active:scale-95 ${marginClass} ${isSupportActive ? activeClasses : inactiveClasses}`;
        const supportIconStyle = isSupportActive ? "font-variation-settings: 'FILL' 1;" : "";

        // Populate the entire aside element
        aside.innerHTML = `
            <div class="px-6 mb-8 flex items-center gap-3">
                <span class="font-display-lg text-2xl font-bold text-primary">SmartSportz.in</span>
            </div>
            <nav id="main-nav" class="flex-grow space-y-1 overflow-y-auto px-2">
                ${linksHTML}
            </nav>
            <div class="mt-auto px-2 pt-4 border-t border-outline-variant/10 flex flex-col gap-2">
                <a class="${supportClasses}" href="../premium_contact_center/code.html">
                    <span class="material-symbols-outlined" style="${supportIconStyle}">help</span>
                    <span class="font-label-md text-label-md">Support</span>
                </a>
                <a class="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:text-white hover:bg-surface-variant/20 transition-all duration-200 text-error" href="#">
                    <span class="material-symbols-outlined">logout</span>
                    <span class="font-label-md text-label-md">Sign Out</span>
                </a>
            </div>
        `;
    }

    // -------------------------------------------------------------
    // 2. Topbar Navigation
    // -------------------------------------------------------------
    const currentPath = window.location.pathname;

    const topNavItems = [
        { name: "Home", path: "../smartsportz_premium_landing_page_light/code.html", pattern: /(smartsportz_premium_landing_page|smartsportz_landing_page)/ },
        { name: "Tournaments", path: "../browse_tournaments_enterprise_discovery_hub/code.html", pattern: /(browse_tournaments_enterprise_discovery_hub|tournament_listing_page|tournament_detail_page|tournament_management|professional_tournament_registration)/ },
        { name: "Sports", path: "../sports_categories_explorer/code.html", pattern: /sports_categories_explorer/ },
        { name: "Livescore", path: "../live_score_dashboard_premium_dark/code.html", pattern: /live_score_dashboard_premium_dark/ },
        { name: "Results", path: "../premium_live_match_center/code.html", pattern: /(premium_live_match_center|smartsportz_live_match_center)/ },
        { name: "Analytics", path: "../organizer_dashboard/code.html", pattern: /organizer_dashboard/ },
        { name: "Gallery", path: "../professional_sports_media_gallery/code.html", pattern: /professional_sports_media_gallery/ },
        { name: "Sponsors", path: "../premium_sponsorship_center/code.html", pattern: /premium_sponsorship_center/ },
        { name: "Leaderboard", path: "../professional_leaderboard_center/code.html", pattern: /professional_leaderboard_center/ },
        { name: "Partners", path: "../premium_sponsorship_center/code.html", pattern: /premium_sponsorship_center/ },
        { name: "Reports", path: "../organizer_dashboard/code.html#reports", pattern: /#reports/ },
        { name: "Logs", path: "../organizer_dashboard/code.html#logs", pattern: /#logs/ }
    ];

    // Helper to generate the links list dynamically with active state highlights
    function renderTopNavLinks() {
        return topNavItems.map(item => {
            let isActive = false;
            if (item.name === "Reports") {
                isActive = currentPath.includes("organizer_dashboard") && window.location.hash === "#reports";
            } else if (item.name === "Logs") {
                isActive = currentPath.includes("organizer_dashboard") && window.location.hash === "#logs";
            } else if (item.name === "Analytics") {
                isActive = currentPath.includes("organizer_dashboard") && window.location.hash !== "#reports" && window.location.hash !== "#logs";
            } else {
                isActive = item.pattern.test(currentPath);
            }

            const activeClass = "text-primary dark:text-primary-fixed font-bold border-b-2 border-primary pb-1";
            const inactiveClass = "text-text-secondary dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 border-b-2 border-transparent pb-1";

            return `<a class="font-label-md text-label-md whitespace-nowrap ${isActive ? activeClass : inactiveClass}" href="${item.path}">${item.name}</a>`;
        }).join("\n");
    }

    // Identify the topbar container and rewrite its contents
    const header = document.querySelector("header") || document.querySelector("nav.sticky.top-0") || document.querySelector("nav.fixed.top-0");
    if (header) {
        // Find the wrapper element inside header that has the flex layout
        let container = header;
        if (!header.classList.contains("flex") && !header.className.includes("flex")) {
            const innerNav = header.querySelector("nav");
            const innerDiv = header.querySelector("div.flex") || header.querySelector("div");
            if (innerNav && (innerNav.classList.contains("flex") || innerNav.className.includes("flex"))) {
                container = innerNav;
            } else if (innerDiv && (innerDiv.classList.contains("flex") || innerDiv.className.includes("flex"))) {
                container = innerDiv;
            }
        }

        if (container) {
            // Apply standard styling to container if needed, e.g. flex layout
            if (!container.classList.contains("flex") && !container.className.includes("flex")) {
                container.classList.add("flex", "justify-between", "items-center");
            }
            container.innerHTML = `
                <div class="flex items-center gap-6 overflow-x-auto py-1 no-scrollbar flex-grow max-w-[75%]">
                    ${renderTopNavLinks()}
                </div>
                <div class="flex items-center gap-4 ml-auto">
                    <div class="flex items-center gap-2 md:gap-3">
                        <button class="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer" title="Notifications">
                            <span class="material-symbols-outlined">notifications</span>
                        </button>
                        <button class="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer" title="Settings">
                            <span class="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                    <a href="../minimal_premium_login_page/code.html" class="px-4 py-2 md:px-5 md:py-2 border border-primary text-primary rounded-full font-label-md text-label-md hover:bg-primary/10 transition-all active:scale-95 whitespace-nowrap">Login</a>
                    <a href="../professional_tournament_registration/code.html" class="px-4 py-2 md:px-5 md:py-2 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 whitespace-nowrap">Register</a>
                </div>
            `;

            // Listen to hashchange events to dynamically refresh the active state of "Reports", "Logs" and "Analytics"
            window.addEventListener("hashchange", () => {
                const linksWrapper = container.querySelector(".no-scrollbar");
                if (linksWrapper) {
                    linksWrapper.innerHTML = renderTopNavLinks();
                }
            });
        }
    }

    // Inject custom CSS styles for the top navigation (e.g. hiding scrollbars)
    const navStyle = document.createElement("style");
    navStyle.textContent = `
        .no-scrollbar::-webkit-scrollbar { display: none !important; }
        .no-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
    `;
    document.head.appendChild(navStyle);
});
