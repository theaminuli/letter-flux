<div align="center">
  <img src="https://raw.githubusercontent.com/theaminuli/letter-flux/refs/heads/main/screenshot.png" alt="letter-flux"/>
</div>

# LetterFlux

A powerful, interactive tool for creating and fine-tuning fluid CSS properties using CSS clamp() function. Built with Vue.js 3 and modern web technologies.

## 🚀 Features

- **Interactive Editor**: Adjust min/max values, change rates, and relative sizing with intuitive controls
- **Multi-Property Support**: Generate fluid values for typography, spacing, sizing, positioning, and layout properties
- **Live Preview**: Real-time graph visualization of fluid CSS behavior
- **Table View**: Detailed breakdown of property values across different viewport widths
- **Code Generation**: Automatic CSS `clamp()` code generation with copy functionality
- **Responsive Design**: Fully responsive interface that works on all devices
- **Share & Export**: Easy sharing and exporting of configurations

## 🛠️ Technologies

- **Vue.js 3** with Composition API
- **Vue Router** for navigation
- **Chart.js** for interactive graphs
- **SCSS** with CSS variables
- **Vite** for build tooling
- **ESLint + Prettier** for code quality

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/theaminuli/letter-flux.git

# Navigate to project directory
cd letter-flux

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run format       # Format code with Prettier
npm run lint         # Lint code with ESLint
npm run lint:fix     # Auto-fix linting issues
npm run format:all   # Format and fix all issues
```

## 💡 Usage

1. **Select Property**: Choose from various CSS properties (typography, spacing, sizing, positioning, etc.)
2. **Adjust Settings**: Use the form controls to set minimum and maximum values
3. **Fine-tune**: Use range sliders for precise adjustments
4. **Visualize**: View the fluid behavior on the interactive graph
5. **Inspect**: Check specific viewport sizes in the table view
6. **Copy Code**: Generate and copy the CSS clamp() function
7. **Share**: Share your configuration with others

## 🎨 What is Fluid CSS?

Fluid CSS is a modern approach to responsive design that allows CSS property values to scale smoothly between minimum and maximum values based on viewport width.  
It uses the CSS [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) function to define values that adapt automatically across screen sizes.

### Supported Properties

This tool supports generating fluid values for various CSS properties:

**Typography:** Font Size, Line Height, Letter Spacing, Word Spacing

**Spacing:** Margin, Padding, Gap

**Sizing:** Width, Max Width, Flex Basis

**Layout & Styling:** Border Radius, Border Width, Position (Top, Left), Transition Duration

For example:

```css
/* Fluid typography */
.title {
    font-size: clamp(1rem, 2vw + 1rem, 2.5rem);
}

/* Fluid spacing */
.container {
    padding: clamp(1rem, 3vw, 3rem);
}

/* Fluid positioning */
.element {
    top: clamp(10px, 2vw + 5px, 50px);
}
```
## What Makes This Project Stand Out
- Solves a real developer problem
- Modern tech stack (Vue 3, ES6+, SCSS)
- Production-ready features (PWA, accessibility)
- Open source contribution
- Clean, documented code
- Responsive design principles

## Key Metrics to Mention
- Accessibility compliant (WCAG 2.1 AA)
- Mobile-first responsive design
- Zero dependencies for core functionality
- Fast build times with Vite
- SEO optimized with proper meta tags

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [GPL License](LICENSE).

## 👨‍💻 Author

**Aminul Islam**

- GitHub: [@theaminuli](https://github.com/theaminuli)
- Twitter: [@theaminuli](https://twitter.com/theaminuli)
- LinkedIn: [theaminuli](https://linkedin.com/in/theaminuli)

## 🙏 Inspiration & Resources

This project was inspired by comprehensive research and learning from these excellent resources:

- [MDN CSS clamp Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) - Official CSS clamp() reference
- [CSS-Tricks clamp Guide](https://css-tricks.com/almanac/functions/c/clamp/) - Comprehensive clamp() function guide
- [Web.dev Responsive Design](https://web.dev/articles/min-max-clamp) - Modern responsive design techniques
- [CSS-Tricks Fluid Typography](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) - Viewport-based font scaling

---

⭐ If you find this project useful, please consider giving it a star!
