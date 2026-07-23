// common-nav.js
document.addEventListener("DOMContentLoaded", () => {
    const aside = document.querySelector("aside");
    if (!aside) return;

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
});
