# Bugzilla Client

This is a simple Bugzilla client built in React.

## Challenges

- **Search Bar**  
  I faced a tough choice between using Bugzilla’s built-in API search capabilities or implementing a custom, client-side filtering solution. Filtering by hand meant sacrificing a global search feature, as it would require fetching and filtering all data on the client side. However, this approach offered faster, responsive searching on the "Products" page since it worked on a single fetched data array. Ultimately, I chose to focus on speed and opted for a custom search limited to the "Products" page, prioritizing performance over broader search capabilities.

- **Styling**  
  Designing an appealing UI was challenging, as I don’t have extensive experience with UI/UX design. I tackled this by relying on patience, utilizing Material UI for pre-built components, and drawing on some basic knowledge of color palettes.

- **Understanding the API**  
  Initially, I struggled to understand the Bugzilla API structure. However, by building small components and making incremental API calls, I gradually developed a clear understanding of how it worked.

- **Learning React**  
  Since this was my first project using React, there was a learning curve. Over time, however, I became more comfortable, and things began to fall into place.

- **Switching from Create-React-App to Vite**  
  I initially set up the project using Create React App, only to realize it was deprecated and causing issues due to mismatched TypeScript versions. I switched to Vite with minimal effort, and everything worked as expected.

## Design Decisions

- I chose the Bugzilla API for this project because it was open and didn’t require authentication.
- Material UI was selected for its ready-to-use components, which helped simplify the design process.
- Vite was chosen as the project starter because it’s modern and performs better than Create React App.
- I used the OpenAPI TypeScript library to autogenerate TypeScript typings for the Bugzilla API, which greatly streamlined development.
