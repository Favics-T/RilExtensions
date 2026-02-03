import DevLens from './assets/images/logo-devlens.svg'
import ConsolePlus from './assets/images/logo-console-plus.svg'
import DomSnapshot from './assets/images/logo-dom-snapshot.svg'

// import Dev from ''
import GridGuides from './assets/images/logo-grid-guides.svg'
import JsonWizard from './assets/images/logo-json-wizard.svg'
import LinkChecker from './assets/images/logo-link-checker.svg'

import MarkupNotes from './assets/images/logo-markup-notes.svg'
import PalettePickers from './assets/images/logo-palette-picker.svg'
import SpeedBoost from './assets/images/logo-speed-boost.svg'

import StyleSpy from './assets/images/logo-style-spy.svg'
import TabMasterPro from './assets/images/logo-tab-master-pro.svg'
import ViewportBuddy from './assets/images/logo-viewport-buddy.svg'


export const extensionList = [
  {
    logo: DevLens,
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true
  },
  {
    logo: StyleSpy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true
  },
  {
    logo: SpeedBoost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false
  },
  {
    logo: JsonWizard,
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true
  },
  {
    logo: TabMasterPro,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true
  },
  {
    logo: ViewportBuddy,
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    isActive: false
  },
  {
    logo: MarkupNotes,
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true
  },
  {
    logo: GridGuides,
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false
  },
  {
    logo: PalettePickers,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true
  },
  {
    logo: LinkChecker,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true
  },
  {
    logo: DomSnapshot,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false
  },
  {
    logo: ConsolePlus,
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    isActive: true
  }
]
