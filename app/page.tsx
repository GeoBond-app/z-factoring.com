import Link from 'next/link';

export const metadata = {
  title: 'Z-Factoring | Government Insight Platform',
  description: 'Community signal intelligence for government agencies. City, county, and state level insight delivered daily.',
};

export default function HomePage() {
  return (
    <main style={{minHeight:'100vh',background:'#fff',color:'#121212',fontFamily:'ui-sans-serif,system-ui,-apple-system,sans-serif'}}>

      {/* NAV */}
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 32px',borderBottom:'0.5px solid #DDDDDD'}}>
        <div>
          <div style={{fontSize:'20px',fontWeight:'500',letterSpacing:'-0.4px'}}>Z-Factoring</div>
          <div style={{fontSize:'10px',letterSpacing:'0.18em',textTransform:'uppercase',color:'#777777',marginTop:'2px'}}>Government Insight Platform</div>
        </div>
        <div style={{display:'flex',gap:'24px',fontSize:'13px',color:'#555555',alignItems:'center'}}>
          <a href="#solutions" style={{color:'#555555',textDecoration:'none'}}>Solutions</a>
          <a href="#plans" style={{color:'#555555',textDecoration:'none'}}>Plans</a>
          <a href="#contact" style={{color:'#555555',textDecoration:'none'}}>Contact</a>
          <a href="#contact" style={{fontSize:'12px',padding:'8px 16px',background:'#1D9E75',color:'#fff',borderRadius:'4px',textDecoration:'none',fontWeight:'500'}}>Apply for access</a>
        </div>
      </nav>

      {/* SIGNAL BAR */}
      <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'9px 32px',borderBottom:'0.5px solid #DDDDDD',background:'#FAFAFA'}}>
        <div style={{display:'flex',alignItems:'center',gap:'5px',fontSize:'10px',letterSpacing:'0.12em',textTransform:'uppercase',color:'#7F77DD',flexShrink:0}}>
          <div style={{width:'5px',height:'5px',borderRadius:'50%',background:'#7F77DD'}}></div>
          Government signal
        </div>
        <span style={{fontSize:'13px',color:'#555555',flex:1}}>Water rate increases affecting 4.2M Bay Area residents · community response signal rising</span>
        <span style={{fontSize:'10px',fontWeight:'500',padding:'2px 8px',background:'#7F77DD',color:'#fff',borderRadius:'3px',flexShrink:0}}>9/10</span>
      </div>

      {/* HERO */}
      <section style={{padding:'64px 32px',borderBottom:'0.5px solid #DDDDDD',maxWidth:'640px'}}>
        <div style={{fontSize:'11px',letterSpacing:'0.18em',textTransform:'uppercase',color:'#7F77DD',marginBottom:'16px'}}>
          For city · county · state agencies
        </div>
        <h1 style={{fontSize:'36px',fontWeight:'400',fontFamily:'Georgia,Cambria,serif',lineHeight:'1.25',letterSpacing:'-0.3px',marginBottom:'20px',color:'#121212'}}>
          Community insight<br />
          for government agencies<br />
          <em style={{color:'#555555'}}>that need to know first.</em>
        </h1>
        <p style={{fontSize:'15px',color:'#333333',lineHeight:'1.7',maxWidth:'520px',marginBottom:'32px'}}>
          Z-Factoring delivers processed community signals to government agencies before they become crises.
          Know what your community is carrying. Respond with clarity. Build trust through timely action.
        </p>
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
          <a href="#contact" style={{fontSize:'13px',padding:'12px 24px',background:'#7F77DD',color:'#fff',borderRadius:'4px',textDecoration:'none',fontWeight:'500'}}>Apply for government access</a>
          <a href="#solutions" style={{fontSize:'13px',padding:'12px 24px',border:'0.5px solid #DDDDDD',borderRadius:'4px',textDecoration:'none',color:'#121212'}}>See how it works →</a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="solutions" style={{padding:'48px 32px',borderBottom:'0.5px solid #DDDDDD'}}>
        <div style={{fontSize:'10px',letterSpacing:'0.18em',textTransform:'uppercase',color:'#777777',marginBottom:'8px'}}>How it works</div>
        <h2 style={{fontSize:'22px',fontWeight:'500',marginBottom:'32px',color:'#121212'}}>From community signal to government response</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'16px'}}>
          {[
            {num:'01',title:'Signal detected',body:'Z-Factoring monitors local and global publications daily. Every story scored for community impact.'},
            {num:'02',title:'Z-Factored',body:'Each signal processed through three lenses. The news. The feeling. The question your community is asking.'},
            {num:'03',title:'Agency matched',body:'Signals filtered by your jurisdiction, department, and topic areas. Only what is relevant reaches you.'},
            {num:'04',title:'Delivered daily',body:'Morning digest to your team. Real-time alerts for high-score signals. Dashboard for your agency.'},
          ].map(step => (
            <div key={step.num} style={{padding:'20px',background:'#FAFAFA',border:'0.5px solid #DDDDDD',borderRadius:'6px'}}>
              <div style={{fontSize:'11px',fontWeight:'500',color:'#7F77DD',marginBottom:'10px'}}>Step {step.num}</div>
              <div style={{fontSize:'13px',fontWeight:'500',color:'#121212',marginBottom:'6px'}}>{step.title}</div>
              <div style={{fontSize:'12px',color:'#555555',lineHeight:'1.6'}}>{step.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS BY AGENCY */}
      <section style={{padding:'48px 32px',borderBottom:'0.5px solid #DDDDDD'}}>
        <div style={{fontSize:'10px',letterSpacing:'0.18em',textTransform:'uppercase',color:'#777777',marginBottom:'8px'}}>Solutions by agency</div>
        <h2 style={{fontSize:'22px',fontWeight:'500',marginBottom:'32px',color:'#121212'}}>Built for every department</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
          {[
            {color:'#7F77DD',title:'City · County Government',body:'Monitor community sentiment before public meetings. Track policy impact signals. Know what residents are carrying before they arrive at your door.',signals:['Budget cut signal · community response','Zoning change · neighborhood impact','Public meeting · attendance signal']},
            {color:'#1D9E75',title:'Emergency Services',body:'Real-time community safety signals. Alert residents in affected areas instantly. Coordinate response before situation escalates.',signals:['Safety signal · high severity alert','Evacuation zone · resident notification','Recovery signal · community needs']},
            {color:'#BA7517',title:'Schools · Education',body:'Track family wellbeing signals in your district. Monitor community issues affecting students. Communicate schedule changes to affected families.',signals:['Family stress signal · district wide','Budget impact · parent community','Safety signal · school proximity']},
            {color:'#7F77DD',title:'Public Works · Utilities',body:'Alert communities about service disruptions before complaints arrive. Track infrastructure signal strength. Communicate rate changes with context.',signals:['Water rate signal · resident impact','Infrastructure signal · maintenance','Service disruption · affected area']},
          ].map(agency => (
            <div key={agency.title} style={{padding:'24px',border:'0.5px solid #DDDDDD',borderRadius:'6px',borderLeft:`3px solid ${agency.color}`}}>
              <div style={{fontSize:'14px',fontWeight:'500',marginBottom:'8px',color:'#121212'}}>{agency.title}</div>
              <div style={{fontSize:'13px',color:'#333333',lineHeight:'1.65',marginBottom:'16px'}}>{agency.body}</div>
              <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
                {agency.signals.map(signal => (
                  <div key={signal} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'11px',color:'#555555',padding:'6px 0',borderBottom:'0.5px solid #F0F0F0'}}>
                    <div style={{width:'5px',height:'5px',borderRadius:'50%',background:agency.color,flexShrink:0}}></div>
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THREE REALITIES */}
      <section style={{padding:'48px 32px',borderBottom:'0.5px solid #DDDDDD',background:'#FAFAFA'}}>
        <div style={{fontSize:'10px',letterSpacing:'0.18em',textTransform:'uppercase',color:'#777777',marginBottom:'8px'}}>Powered by Z-Factors</div>
        <h2 style={{fontSize:'22px',fontWeight:'500',marginBottom:'8px',color:'#121212'}}>Every signal. Three realities.</h2>
        <p style={{fontSize:'13px',color:'#555555',marginBottom:'32px',maxWidth:'480px'}}>Z-Factoring processes every community signal through three lenses before it reaches your agency.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px'}}>
          {[
            {color:'#1D9E75',short:'The real story.',long:'What really happened.',body:'Facts · data · events · sources. What your agency can act on.'},
            {color:'#7F77DD',short:'The real feeling.',long:'How it really lands on people.',body:'Who is affected. What your community is carrying. What they need.'},
            {color:'#BA7517',short:'The real response.',long:'What we can do together.',body:'What your agency can do. What the community is asking. The question nobody else is asking.'},
          ].map(r => (
            <div key={r.short} style={{borderLeft:`2px solid ${r.color}`,paddingLeft:'16px'}}>
              <div style={{fontSize:'13px',fontWeight:'500',marginBottom:'3px',color:'#121212'}}>{r.short}</div>
              <div style={{fontSize:'13px',fontStyle:'italic',fontFamily:'Georgia,serif',color:'#555555',marginBottom:'8px'}}>{r.long}</div>
              <div style={{fontSize:'12px',color:'#777777',lineHeight:'1.6'}}>{r.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" style={{padding:'48px 32px',borderBottom:'0.5px solid #DDDDDD'}}>
        <div style={{fontSize:'10px',letterSpacing:'0.18em',textTransform:'uppercase',color:'#777777',marginBottom:'8px'}}>Plans</div>
        <h2 style={{fontSize:'22px',fontWeight:'500',marginBottom:'32px',color:'#121212'}}>Simple government pricing</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px'}}>
          {[
            {tag:'Department',price:'$500',period:'per month · 1 agency',name:'Agency signals',desc:'Essential community intelligence for a single government department.',features:['Signal digest · daily','Emergency broadcast','Public notices','Community feedback','1 jurisdiction'],featured:false},
            {tag:'City · County',price:'$2,000',period:'per month · all departments',name:'Citywide signals',desc:'Full platform deployment across all city or county departments.',features:['All departments','Citywide broadcast','API integration','Analytics dashboard','Annual contract'],featured:true},
            {tag:'Enterprise',price:'Custom',period:'annual contract',name:'Regional signals',desc:'Multi-city or regional deployment with custom integration.',features:['Multi-jurisdiction','Custom integration','Dedicated support','SLA guarantee','Training included'],featured:false},
          ].map(plan => (
            <div key={plan.tag} style={{padding:'24px',border:plan.featured?'2px solid #7F77DD':'0.5px solid #DDDDDD',borderRadius:'6px',background:'#fff'}}>
              <div style={{fontSize:'10px',fontWeight:'500',padding:'2px 8px',borderRadius:'3px',background:'#EEEDFE',color:'#3C3489',display:'inline-block',marginBottom:'12px'}}>{plan.tag}</div>
              <div style={{fontSize:'26px',fontWeight:'500',color:'#121212'}}>{plan.price}</div>
              <div style={{fontSize:'11px',color:'#777777',marginBottom:'16px'}}>{plan.period}</div>
              <div style={{fontSize:'14px',fontWeight:'500',marginBottom:'6px',color:'#121212'}}>{plan.name}</div>
              <div style={{fontSize:'12px',color:'#555555',lineHeight:'1.55',marginBottom:'16px'}}>{plan.desc}</div>
              <div style={{display:'flex',flexDirection:'column',gap:'0',marginBottom:'20px'}}>
                {plan.features.map(f => (
                  <div key={f} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'12px',color:'#333333',padding:'6px 0',borderBottom:'0.5px solid #F0F0F0'}}>
                    <div style={{width:'5px',height:'5px',borderRadius:'50%',background:'#7F77DD',flexShrink:0}}></div>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#contact" style={{display:'block',textAlign:'center',padding:'8px',fontSize:'12px',fontWeight:'500',borderRadius:'4px',textDecoration:'none',background:plan.featured?'#7F77DD':'transparent',color:plan.featured?'#fff':'#121212',border:plan.featured?'none':'0.5px solid #DDDDDD'}}>
                {plan.price === 'Custom' ? 'Contact us' : 'Apply now'}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{padding:'48px 32px',borderBottom:'0.5px solid #DDDDDD'}}>
        <div style={{fontSize:'10px',letterSpacing:'0.18em',textTransform:'uppercase',color:'#777777',marginBottom:'8px'}}>Contact</div>
        <h2 style={{fontSize:'22px',fontWeight:'500',marginBottom:'8px',color:'#121212'}}>Apply for government access</h2>
        <p style={{fontSize:'13px',color:'#555555',marginBottom:'24px',maxWidth:'480px'}}>Z-Factoring works with city, county, and state agencies. All plans require application and approval. Contact us to begin.</p>
        <div style={{padding:'24px',border:'0.5px solid #DDDDDD',borderRadius:'6px',background:'#FAFAFA',maxWidth:'400px'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px',marginBottom:'16px'}}>
            <div>
              <div style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'0.1em',color:'#777777',marginBottom:'4px'}}>Contact</div>
              <div style={{fontSize:'14px',fontWeight:'500',color:'#121212'}}>Terrence Lee</div>
            </div>
            <div>
              <div style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'0.1em',color:'#777777',marginBottom:'4px'}}>Email</div>
              <a href="mailto:terry@geobond.app" style={{fontSize:'14px',color:'#7F77DD',textDecoration:'none',fontWeight:'500'}}>terry@geobond.app</a>
            </div>
            <div>
              <div style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'0.1em',color:'#777777',marginBottom:'4px'}}>Platform</div>
              <div style={{fontSize:'14px',color:'#121212'}}>Z-Factoring</div>
            </div>
            <div>
              <div style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'0.1em',color:'#777777',marginBottom:'4px'}}>Part of</div>
              <a href="https://etherom.com" style={{fontSize:'14px',color:'#555555',textDecoration:'none'}}>Etherom</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'16px 32px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{fontSize:'11px',color:'#777777'}}>Z-Factoring · Government Insight Platform · Part of Etherom</span>
        <div style={{display:'flex',gap:'16px',fontSize:'11px',color:'#777777'}}>
          <a href="https://z-factors.com" style={{color:'#777777',textDecoration:'none'}}>Z-Factors</a>
          <a href="https://geobond.app" style={{color:'#777777',textDecoration:'none'}}>GeoBond</a>
          <a href="https://etherom.com" style={{color:'#777777',textDecoration:'none'}}>Etherom</a>
        </div>
      </footer>

    </main>
  );
}
