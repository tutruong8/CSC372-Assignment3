# University of Tú Event showcase

## Project Description
The purpose of this website is to give students access to a simple to use website where events happening at the University of Tú is going on.

## Layout Decisions
### Flexbox
Flexbox was used in the header, navigation lists, hero sections, event card content, and footer. This makes it easier to align and arange the items within each part to have a layout that is accessible..

### Grid
CSS Grid was used for the upcoming event cards, the event description, the sidebar/aside layout, and the related event cards. This provides structured rows and columns for comparing event cards and creates a main-content + sidebar layout on the event details page for displaying info about the main event.

## Responsive Design
There are two breakpoints:

### Breakpoint 1
`max-width: 900px`

The event card grids and related event grids change from three columns to two columns

### Breakpoint 2
`max-width: 600px`

The header, footer, and hero sections change from horizontal Flexbox layouts to a more vertical layout. Navigation aligns from the start, and the event card grids, related events, and event sidebar layout change to one singular column for vertical scrolling.

### Testing
I tested this site using inspect tools on a Chromium-based browser along with a Gecko-based browser. Both browsers have a responsive design mode where the aspect ratio can be changed by pixel to test the layout changes within. and see how responsive each site is

## Semantic HTML
### Element 1: Header
Using a header helps create the top of the site that both pages. It groups the branding along with navigation.


### Element 2: Section
Sections allow me to write out which part of a site belongs where and group elements accordingly. Where do I put the main event? Where do I put related events? This makes finding what I need easier and faster


### Element 3: Article
This separates each event into each card, or article. Each event has it's own date, time, location, and category.


### Element 4: Aside
This helps illustrate what will be presented on the side of pages as secondary information. This is also used in events.html to give the date, time, location, and registration.

## Sources
### Images
- For International Night - https://thecougarstar.com/3024/feature/international-night/
- For Vietnamese Student Association Meeting - https://vectorflags.com/vietnam/vn-square-01
- For Open Gym Class - https://cityfitness.com/logan-square
- For Grand Tour - https://www.roehampton.ac.uk/schools-and-colleges-engagement/campus-visit/
- For Voting Registration - https://www.cairchicago.org/blog/2019/9/newsletter-september-26th-2019
- For Hero Image - https://chaiblog.childrensnational.org/census-2020-new-ways-to-categorize-race-ethnicity/

### Fonts
- System Fonts
