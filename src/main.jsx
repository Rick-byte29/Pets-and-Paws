import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, ArrowUpRight, Bird, Check, Fish, Heart, Menu, PawPrint, Phone, ShieldCheck, Sparkles, Star, X } from 'lucide-react'
import './style.css'

const phone = '9101035255'
const photos = {
  dog: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85',
  cat: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1000&q=85',
  fish: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1100&q=85',
  bird: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85',
  happyDog: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=85',
  grooming: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85',
  womanDog: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=85',
}

const categories = [
  { icon: PawPrint, name: 'Dogs & puppies', note: 'The happiest hello', img: photos.dog, tone: 'lavender' },
  { icon: Heart, name: 'Cats & kittens', note: 'Small paws, big purrs', img: photos.cat, tone: 'peach' },
  { icon: Fish, name: 'Aquatic life', note: 'A little underwater magic', img: photos.fish, tone: 'blue' },
  { icon: Bird, name: 'Birds & more', note: 'A brighter kind of chirp', img: photos.bird, tone: 'yellow' },
]

const reviews = [
  { quote: 'The team made bringing home our first puppy feel easy, thoughtful, and full of joy. We still pop in every week.', name: 'A happy first-time pet parent', pet: 'Milo’s human', stars: 5 },
  { quote: 'Such a lovely place. You can tell the animals are cared for and the staff really takes time to help you choose.', name: 'A regular visitor', pet: 'Two curious cats', stars: 5 },
  { quote: 'They helped us set up our first aquarium from scratch. The advice was kind, clear, and genuinely useful.', name: 'A new fish-keeping family', pet: 'The little tank crew', stars: 5 },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeReview, setActiveReview] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view')
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const scrollTo = (id) => (event) => {
    event.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }

  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={scrollTo('#home')} aria-label="Pets and Paws home">
        <span className="brand-mark"><PawPrint size={22} strokeWidth={2.2} /></span>
        <span className="brand-copy"><strong>pets <em>&</em> paws</strong><small>GOOD THINGS GROW HERE</small></span>
      </a>
      <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        <a href="#companions" onClick={scrollTo('#companions')}>Our companions</a>
        <a href="#care" onClick={scrollTo('#care')}>Care & services</a>
        <a href="#stories" onClick={scrollTo('#stories')}>Happy tails</a>
        <a href="#visit" onClick={scrollTo('#visit')}>Visit us</a>
      </nav>
      <a className="header-call" href={`tel:${phone}`}><Phone size={15} /> <span>Call us</span><ArrowUpRight size={14} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero" id="home" aria-label="Welcome to Pets and Paws">
        <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true" poster={photos.happyDog}>
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow hero-enter"><span className="eyebrow-line" /> A LITTLE MORE LOVE, EVERY DAY</div>
          <h1 className="hero-title"><span className="hero-line line-one">Find your</span><span className="hero-line line-two">kind of <i>wonderful.</i></span></h1>
          <p className="hero-sub hero-enter delay-3">Good friends come in all shapes, sizes<br className="desktop-break" /> and very enthusiastic tail wags.</p>
          <div className="hero-actions hero-enter delay-4">
            <a href="#companions" className="button button-lime" onClick={scrollTo('#companions')}>Meet your new best friend <ArrowRight size={17} /></a>
            <a href={`tel:${phone}`} className="hero-phone"><span className="phone-icon"><Phone size={15} /></span><span><small>We’d love to help</small><strong>{phone}</strong></span></a>
          </div>
        </div>
        <div className="hero-side-note"><span>YOUR NEIGHBOURHOOD PET PEOPLE</span><i /></div>
        <a className="scroll-cue" href="#companions" onClick={scrollTo('#companions')}><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        <div className="hero-stamp"><PawPrint size={17} /><span>Come as<br />you are.</span></div>
      </section>

      <section className="ticker" aria-label="Our promise"><div className="ticker-track">{Array.from({ length: 4 }, (_, i) => <React.Fragment key={i}><span>GOOD PETS. GOOD PEOPLE.</span><PawPrint size={17} /><span>BIG LOVE, LITTLE PAWS.</span><Sparkles size={17} /></React.Fragment>)}</div></section>

      <section className="companions section-pad" id="companions">
        <div className="section-heading reveal">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> MADE FOR EACH OTHER</div><h2>Meet your <i>kind</i><br />of companion.</h2></div>
          <div className="heading-aside"><p>From first-time fish keepers to lifelong dog people, there’s a little something here for every kind of love.</p><a href={`tel:${phone}`} className="text-link">Let’s find your match <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="category-grid">
          {categories.map(({ icon: Icon, name, note, img, tone }, i) => <a href="#visit" onClick={scrollTo('#visit')} className={`category-card ${tone} reveal`} style={{ '--delay': `${i * 90}ms` }} key={name}>
            <div className="category-img"><img src={img} alt={name} loading="lazy" /><span className="category-icon"><Icon size={19} /></span><span className="card-arrow"><ArrowUpRight size={18} /></span></div>
            <div className="category-copy"><div><h3>{name}</h3><p>{note}</p></div><span className="category-index">0{i + 1}</span></div>
          </a>)}
        </div>
        <div className="care-note reveal"><span className="care-note-icon"><ShieldCheck size={22} /></span><p><strong>Little lives deserve big care.</strong> Every animal here is treated with patience, respect, and lots of gentle attention.</p><span className="note-doodle">✳</span></div>
      </section>

      <section className="care-section" id="care">
        <div className="care-photo"><img src={photos.grooming} alt="A gentle moment during pet care" loading="lazy" /><span className="photo-tag"><Heart size={14} fill="currentColor" /> CARE COMES FIRST</span><div className="photo-circle">GOOD<br />CARE<br /><i>feels</i><br />LIKE<br />LOVE</div></div>
        <div className="care-copy section-pad reveal">
          <div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> THE GOOD STUFF</div><h2>More than a<br />shop. <i>A soft</i><br /><i>landing place.</i></h2>
          <p>Whether you’re picking up a favourite treat or figuring out the first steps of pet parenthood, we’re right here with a little know-how and a whole lot of heart.</p>
          <ul className="care-list"><li><span><Check size={14} /></span>Friendly, no-pressure guidance</li><li><span><Check size={14} /></span>Everyday essentials & good treats</li><li><span><Check size={14} /></span>Care advice for all kinds of pets</li></ul>
          <a className="button button-dark" href={`tel:${phone}`}>Ask us anything <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="quote-band"><div className="quote-sun">✳</div><p className="reveal">“The best things in life<br />have <i>paws, fins, or feathers.</i>”</p><span className="quote-caption">A VERY TRUE THING WE BELIEVE</span><div className="quote-paws"><PawPrint /><PawPrint /><PawPrint /></div></section>

      <section className="stories section-pad" id="stories">
        <div className="stories-top reveal"><div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> WORD ON THE STREET</div><h2>Little love notes<br />from <i>our people.</i></h2></div><div className="review-controls"><button onClick={() => setActiveReview((activeReview + reviews.length - 1) % reviews.length)} aria-label="Previous testimonial">←</button><span>0{activeReview + 1} <i>/</i> 0{reviews.length}</span><button onClick={() => setActiveReview((activeReview + 1) % reviews.length)} aria-label="Next testimonial">→</button></div></div>
        <div className="review-layout reveal"><div className="review-image"><img src={photos.womanDog} alt="A dog enjoying a walk with its person" loading="lazy" /><div className="review-image-caption"><span>HAPPY HEARTS, FULL LEASHES</span><PawPrint size={17} /></div></div><article className="review-card" key={activeReview}><div className="star-row">{Array.from({ length: reviews[activeReview].stars }, (_, i) => <Star key={i} size={15} fill="currentColor" />)}</div><span className="quote-mark">“</span><blockquote>{reviews[activeReview].quote}</blockquote><div className="review-person"><span className="person-dot"><PawPrint size={18} /></span><div><strong>{reviews[activeReview].name}</strong><small>{reviews[activeReview].pet}</small></div></div><div className="review-watermark"><Heart size={96} /></div></article></div>
        <p className="testimonial-note">A few kind words from our community <span>·</span> Individual experiences may vary</p>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-copy reveal"><div className="eyebrow light-eyebrow"><span className="eyebrow-line" /> YOUR NEXT HAPPY PLACE</div><h2>Come say<br /><i>hello.</i></h2><p>Pop in for a browse, a chat, or just to say hi to the neighbourhood. We’ll put the kettle on (metaphorically) and make you feel right at home.</p><a className="button button-lime" href={`tel:${phone}`}>Give us a call <ArrowRight size={17} /></a><a className="visit-phone" href={`tel:${phone}`}><Phone size={15} /> {phone}</a></div>
        <div className="visit-art"><div className="visit-ring ring-one"/><div className="visit-ring ring-two"/><div className="visit-bubble"><PawPrint size={43} /><span>YOUR<br />FRIENDS<br />ARE HERE</span></div><span className="visit-doodle doodle-a">✳</span><span className="visit-doodle doodle-b">✳</span><span className="visit-doodle doodle-c">· · ·</span></div>
      </section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#home" onClick={scrollTo('#home')}><span className="brand-mark"><PawPrint size={21} /></span><span className="brand-copy"><strong>pets <em>&</em> paws</strong><small>GOOD THINGS GROW HERE</small></span></a><p>More happy days, one paw at a time.</p><a href={`tel:${phone}`} className="footer-call">{phone} <ArrowUpRight size={15} /></a><span className="copyright">© {new Date().getFullYear()} Pets and Paws. Made with a little extra love.</span></footer>
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
