# Let's start testing awesome libraries!

## How to use

1. To start working on a new feature, add a new page as well as a navlink to that page.
    - Pages are added under "app" as "foldername"/page.tsx, where "foldername" will be the name of the page
    - Navlinks are added in the "src/utils/navigationlinks.ts" file
2. If we intend to try multiple libraries for the same feature, we can swap out the navlink with a [Navigation Menu](https://ui.shadcn.com/docs/components/navigation-menu) component.
3. Feel free to add documentation in the code or here in the README.

## Icons

The main bunch of icons for now are coming from lucic-react, as this is what the UI library uses.

## UI Library

### shadcn/ui

Includes multiple useful components:

-   Components in general
-   Charts
-   Theming

[shacn/ui](https://ui.shadcn.com/docs/components/accordion)

### Flowbite

This is a useful place to look up components using tailwindcss, and literally just copy the elements you need. They use "class", so we need to rename all "class" to "className" in order to use it in React.

[Flowbite](https://flowbite.com/docs/components/spinner/)
