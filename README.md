# Anantha Rao's Academic Website

This is the repository for my personal academic website hosted at [anantha-rao12.github.io](https://anantha-rao12.github.io). 

The website is built using Jekyll and GitHub Pages, originally based on the [Academic Pages template](https://github.com/academicpages/academicpages.github.io) which itself is derived from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/).

## Features

- **Dark Mode Toggle**: Complete dark/light theme switching with sun/moon icons
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Academic Focus**: Organized sections for publications, talks, projects, and teaching
- **Custom Favicon**: SVG favicon support for modern browsers

## Recent Updates (August 2025)

### Dark Mode Implementation
- Added comprehensive dark mode CSS with uniform styling across all elements
- Created theme toggle button with Font Awesome sun/moon icons
- Implemented JavaScript for theme switching with local storage persistence
- Enhanced navigation bar styling for both light and dark modes

### Technical Improvements
- Added favicon.svg support for better branding
- Cleaned up repository by removing unnecessary theme files
- Updated .gitignore to exclude vendor dependencies
- Improved overall code organization and maintainability

### Files Modified
- `_sass/_dark.scss` - New dark mode styles
- `assets/js/theme-toggle.js` - Theme switching functionality
- `_includes/head.html` - Added favicon support
- `_includes/masthead.html` - Added theme toggle button
- `_includes/scripts.html` - Included theme toggle script
- `assets/css/main.scss` - Imported dark mode styles

## Running Locally

To run this website locally for development:

```bash
# Install dependencies
bundle install --path vendor/bundle

# Start the development server
bundle exec jekyll serve --livereload

# Visit http://127.0.0.1:4000 in your browser
```

## Project Structure

```
├── _config.yml          # Site configuration
├── _data/               # Data files (navigation, authors)
├── _includes/           # Reusable HTML components
├── _layouts/            # Page layouts
├── _pages/              # Main pages (about, publications, etc.)
├── _projects/           # Project collection
├── _publications/       # Publications collection
├── _sass/               # Sass stylesheets
├── _talks/              # Talks collection
├── _teaching/           # Teaching collection
├── assets/              # CSS, JS, and other assets
├── files/               # Downloadable files (PDFs, etc.)
├── images/              # Image assets
├── markdown_generator/  # Scripts for generating markdown from TSV
└── talkmap/             # Interactive talk map functionality
```

## Development Notes

The website uses Jekyll for static site generation and is automatically deployed via GitHub Pages. Local development requires Ruby and Bundler.

For generating content from structured data, see the `markdown_generator/` directory which contains Jupyter notebooks and Python scripts for converting TSV files to markdown pages.

## License

This project is based on the Academic Pages template, which is derived from the Minimal Mistakes Jekyll Theme (© 2016 Michael Rose, MIT License).
