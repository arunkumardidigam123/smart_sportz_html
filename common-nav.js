// common-nav.js
document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("main-nav");
    if (!navContainer) return;

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
            name: "Contact Us",
            path: "../premium_contact_center/code.html",
            icon: "contact_mail",
            pattern: "premium_contact_center"
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
    } else if (
        currentPath.includes("sports_categories_explorer") ||
        currentPath.includes("professional_team_directory") ||
        currentPath.includes("premium_contact_center") ||
        currentPath.includes("premium_article_detail_page")
    ) {
        activeClasses = "bg-primary/10 text-primary border-r-4 border-primary font-bold";
        inactiveClasses = "text-on-surface-variant hover:text-white hover:bg-surface-variant/20";
    } else {
        // news blog, media gallery, athlete profile, FAQ center
        activeClasses = "bg-secondary-container text-on-secondary-container font-bold";
        inactiveClasses = "text-on-surface-variant hover:text-white hover:bg-surface-container-highest";
    }

    // Determine margins based on layout requirements per page
    let marginClass = "";
    if (currentPath.includes("organizer_dashboard")) {
        marginClass = "mx-4";
    } else if (currentPath.includes("professional_faq_center")) {
        marginClass = "mx-2";
    }

    // Generate links HTML
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

    navContainer.innerHTML = linksHTML;
});
