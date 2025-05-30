/**
 * Represents a collection of theme styles where the key is a string
 * (e.g., a CSS property or class name) and the value is the corresponding style value.
 */
export interface ThemeStyles {
  [key: string]: string;
}

/**
 * Props for a page component.
 *
 * @interface PageProps
 * @property {ThemeStyles} themeStyles - The theme styles to apply to the page.
 */
export interface PageProps {
  themeStyles: ThemeStyles;
}

/**
 * Represents the properties for a route in the application.
 *
 * @interface RouteProps
 * @property {string} path - The URL path for the route.
 * @property {React.ReactNode} element - The component or element to render for this route.
 * @property {boolean} showInNav - Whether to show the route in the navigation.
 * @property {string} [label] - The optional label for the route.
 */
export interface RouteProps {
  path: string;
  element: React.ReactNode;
  showInNav: boolean;
  label?: string;
}

/**
 * Props for a collection of routes.
 *
 * @interface RoutesProps
 * @property {RouteProps[]} routes - An array of route configurations.
 */
export interface RoutesProps {
  routes: RouteProps[];
}

/**
 * Props for a layout component.
 *
 * @interface LayoutProps
 * @property {React.ReactNode} children - The nested components or elements to render inside the layout.
 * @property {ThemeStyles} themeStyles - The theme styles to apply to the layout.
 * @property {RouteProps[]} routes - An array of route configurations.
 */
export interface LayoutProps {
  children: React.ReactNode;
  themeStyles: ThemeStyles;
  routes: RouteProps[];
}

/**
 * Props for a wrapper component.
 *
 * @interface WrapperProps
 * @property {React.ReactNode} children - The nested components or elements to render inside the wrapper.
 * @property {{ [key: string]: string }} themeStyles - A collection of theme styles where the key is a string
 * (e.g., a CSS property or class name) and the value is the corresponding style value.
 */
export interface WrapperProps {
  children: React.ReactNode;
  themeStyles: { [key: string]: string };
}
