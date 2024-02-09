/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mainSidebar: [
    {
      type: 'link',
      label: 'Home',
      href: '/docs',
    },
    {
      type: 'link',
      label: '🔗 REST API',
      href: '/api/v1',
    },
    {
      type: "category",
      label: "Quick Starts",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "quickstarts/quickstart",
      },
      items: [
        "quickstarts/device360",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: true,
      collapsible: false,
      link: {
        type: "doc",
        id: "getting-started/getting-started",
      },
      items: [
        "getting-started/getting-started-guide",
        "getting-started/system-requirements",
      ],
    },
    {
      type: "category",
      label: "Authentication",
      collapsed: true,
      collapsible: false,
      link: {
        type: "doc",
        id: "authentication/authentication",
      },
      items: [
        "authentication/authentication-guide",
      ],
    },
    {
      type: "category",
      label: "How-to Guides",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "how-to/how-to",
      },
      items: [
        "how-to/how-to-guide",
      ],
    },
    {
      type: "category",
      label: "Inventory",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "inventory/inventory",
      },
      items: [
        "inventory/device360",
        "inventory/add-device",
        "inventory/analyze-devices",
        "inventory/rename-device",
        "inventory/rebind-device",
        "inventory/delete-device",
        "inventory/remove-passkey",
        "inventory/view-query-status",
        "inventory/run-device-query",
        "inventory/view-query-results",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "integrations/integrations",
      },
      items: [
        "integrations/integration-guide",
      ],
    },
    {
      type: "category",
      label: "Reporting",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "reporting/reporting",
      },
      items: [
        "reporting/reporting-guide",
      ],
    },
    {
      type: "category",
      label: "Users",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "users/users",
      },
      items: [
        "users/users-guide",
      ],
    },
    {
      type: "category",
      label: "Security",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "security/security",
      },
      items: [
        "security/security-guide",
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "resources",
      },
      items: [
        "glossary",
        {
          type: "doc",
          id: "contribute/contribute",
          label: "Contributor Guide",
        },
        {
          type: "link",
          label: "Service Status",
          href: "https://status.beyondidentity.com/",
        },
      ],
    },
  ],

  contributorGuideSidebar: [
    {
      type: "doc",
      id: "welcome",
      label: "<- Back to main docs",
    },
    {
      type: "html",
      value: "<hr>",
    },
    {
      type: "category",
      label: "Contribute",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "contribute/contribute",
      },
      items: [
        "contribute/when-to-contribute",
        "contribute/contribute-get-started",
        "contribute/site-organization-and-files",
        "contribute/docs-site-branches",
        "contribute/best-practices",
        {
          type: "category",
          label: "Edit content",
          collapsed: true,
          collapsible: false,
          items: [
            {
              type: "doc",
              id: "contribute/edit-content-minor-changes",
              label: "Minor changes",
            },
            {
              type: "doc",
              id: "contribute/edit-content-significant-changes",
              label: "Significant changes",
            },
          ],
        },
        "contribute/add-new-topic",
        "contribute/create-pull-request",
      ],
    },
    "contribute/markdown-reference",
    "contribute/style-guide",
    "contribute/release-notes-guide",
  ],
};

module.exports = sidebars;
