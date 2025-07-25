// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Overview",
    href: "/overview",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
      { title: "Self-hosting", href: "/self-hosting" }
    ],
  },
  // {
  //   title: "Tutorial",
  //   href: "/tutorial",
  //   noLink: true,
  //   items: [
  //     { title: "Observability", href: "/observalibility" },
  //     { title: "Evaluation", href: "/evaluation" },
  //     { title: "Gaurdrail", href: "/gaurdrail" },
  //   ],
  // },
  {
    title: "Features",
    href: "/features",
    noLink: true,
    items: [
      { title: "Tracing", href: "/tracing" },
      { title: "Metrics", href: "/metrics" },
      { title: "GPU Monitoring", href: "/gpu" },
      { title: "Cost Tracing", href: "/cost" },
      { title: "Prompt Managemnt", href: "/prompt_managment" },
      { title: "Vault", href: "/vault" },
      { title: "Gaurdrail", href: "/gaurdrail" },
      { title: "OpenGround", href: "/openground" },
      { title: "Exceptions Monitoring", href: "/exceptions_monitoring" },
      { title: "Databases", href: "/databases" },
    ],
  },
  {
    title: "Inegrations",
    href: "/inegration",
    noLink: true,
    items: [{ title: "Overview", href: "/overview" }],
  },
  {
    title: "API",
    href: "/api_reference",
    noLink: true,
    items: [{ title: "Overview", href: "/overview" }],
  },
];

type Page = { title: string; href: string };

function getRecursiveAllLinks(node: EachRoute, parentPath = ''): Page[] {
  const ans: Page[] = [];
  const currentPath = `${parentPath}${node.href}`;

  if (!node.noLink) {
    ans.push({ title: node.title, href: currentPath });
  }

  node.items?.forEach((subNode) => {
    ans.push(...getRecursiveAllLinks(subNode, currentPath));
  });

  return ans;
}

export const page_routes = ROUTES.map((route) => getRecursiveAllLinks(route)).flat();
export const defaultPage = page_routes[0]?.href ? (page_routes[0].href.startsWith('/') ? page_routes[0].href : `/${page_routes[0].href}`) : '/docs/overview/introduction';
