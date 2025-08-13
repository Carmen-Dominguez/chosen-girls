# Chosen Girls - Girls' Health & Education Website

A React + TypeScript website for a charity focused on girls' health, particularly menstrual education. The site features a clean, approachable design with soft feminine colors and comprehensive information about the organization's mission and programs.

## 🌟 Features

### Pages
- **Home**: Welcoming introduction, mission overview, and clear call-to-action
- **About**: Detailed information about the charity, goals, and founder's story
- **FAQs**: Common questions about menstrual health with expandable answers

### Components
- **Header**: Navigation with language selector (English/Afrikaans)
- **Footer**: Social media links and copyright information
- **Responsive Design**: Mobile and desktop optimized layouts

### Technical Features
- React 18 with TypeScript
- SCSS for styling with organized modules
- React Router for navigation
- Responsive design with mobile-first approach
- Language selector structure (ready for internationalization)
- Clean, accessible, and well-commented code

## 🎨 Design

The website uses a soft, feminine color palette:
- Primary: Soft pink (#f8b4d9)
- Secondary: Deeper pink (#e8a2c8)
- Accent: Light lavender (#f0e6f7)
- Clean typography with rounded corners and friendly aesthetics

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Video Assets Setup
The hero section uses a video background. To add your video:

1. **Replace the placeholder video file:**
   - Replace `public/hero-video.mp4` with your actual MP4 file
   - Recommended specifications:
     - Format: MP4 with H.264 codec
     - Resolution: 1280x720 or 1920x1080
     - Duration: 10-30 seconds
     - File size: Under 5MB for optimal loading

2. **Add a poster image (optional):**
   - Replace `public/placeholder-video-poster.jpg` with a poster image
   - This image shows while the video is loading
   - Recommended: JPG/PNG, 1280x720, under 500KB

3. **Video optimization tips:**
   - Use tools like HandBrake or FFmpeg to compress your video
   - Consider creating multiple resolutions for different devices
   - Test loading times on slower connections

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chosen-girls
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/         # Navigation and language selector
│   └── Footer/         # Social links and copyright
├── pages/              # Page components
│   ├── Home/           # Homepage with hero and mission
│   ├── About/          # About page with story and goals
│   └── FAQs/           # FAQ page with expandable questions
├── styles/             # SCSS files
│   ├── variables.scss  # Design tokens and variables
│   └── global.scss     # Global styles and resets
├── App.tsx             # Main app component with routing
├── App.scss            # App-level styles
└── index.tsx           # Application entry point
```

## 🌐 Language Support

The website is structured to support multiple languages:
- Currently supports English and Afrikaans
- Language selector in the header
- Prepared structure for easy addition of more languages
- Translation-ready component architecture

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1200px+)

## 🎯 Key Features

### Homepage
- Hero section with clear value proposition
- Mission statement and impact statistics
- Program overview with visual cards
- Call-to-action sections

### About Page
- Organization story and history
- Founder's background and vision
- Goals and objectives
- Values and principles
- Get involved section

### FAQs Page
- Categorized questions and answers
- Expandable/collapsible interface
- Filter by topic categories
- Contact support options

## 🔧 Customization

### Colors
Edit `src/styles/variables.scss` to customize the color scheme:
```scss
$primary-color: #f8b4d9;    // Main brand color
$secondary-color: #e8a2c8;  // Secondary brand color
$accent-color: #f0e6f7;     // Accent color
```

### Content
- Update text content in component files
- Replace placeholder images with actual photos
- Modify FAQ questions and answers
- Update social media links in Footer component

### Styling
- All styles use SCSS with organized variables
- Responsive breakpoints are defined in variables
- Component-specific styles are co-located with components

## 📞 Contact & Support

For questions about the website or to get involved:
- Email: info@chosengirls.org
- Volunteer: volunteer@chosengirls.org
- Support: support@chosengirls.org

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with SCSS
- Icons provided by emoji characters
- Designed with accessibility in mind
- Focused on creating a welcoming, educational experience

---

**Chosen Girls** - Empowering girls through health education and menstrual awareness worldwide.
