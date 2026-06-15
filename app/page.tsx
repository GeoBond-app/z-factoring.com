import Link from "next/link";

export const metadata = {
  title: "Z-Factoring | Government Insight Platform",
  description: "Community signal intelligence for city, county, and state agencies.",
};

const P = "#7F77DD"; const PL = "#EEEDFE"; const PD = "#3C3489";
const T = "#1D9E75"; const TL = "#E1F5EE"; const TD = "#085041";
const A = "#BA7517"; const AL = "#FAEEDA"; const AD = "#633806";
const R = "#E24B4A"; const RL = "#FCEBEB"; const RD = "#A32D2D";
const BD = "#DDDDDD"; const BG = "#FAFAFA";
const TX = "#121212"; const TX3 = "#555555"; const TX4 = "#777777";

function ScoreBadge({ val, color }: { val: string; color?: string }) {
  const v = parseFloat(val);
  const bg = color || (v >= 9 ? T : v >= 7 ? A : P);
  return (
    <span style={{fontSize:"10px",fontWeight:500,padding:"1px 7px",borderRadius:"3px",background:bg,color:"#fff",display:"inline-block"}}>
      {val}/10
    </span>
  );
}

function SignalRow({ score, title, tag, agency, time }: { score:string; title:string; tag:string; agency:string; time:string }) {
  const v = parseFloat(score);
  const ac = v >= 9 ? R : v >= 8 ? A : T;
  return (
    <div style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 20px",borderBottom:`0.5px solid ${BD}`,cursor:"pointer"}}>
      <ScoreBadge val={score} color={ac} />
      <div style={{flex:1}}>
        <div style={{fontSize:"13px",color:TX,fontFamily:"Georgia,serif",lineHeight:1.4,marginBottom:"2px"}}>{title}</div>
        <div style={{fontSize:"11px",color:TX4}}>{agency} - {time}</div>
      </div>
      <span style={{fontSize:"10px",padding:"2px 8px",borderRadius:"3px",background:PL,color:PD,fontWeight:500,flexShrink:0}}>{tag}</span>
      <span style={{fontSize:"11px",color:P,flexShrink:0}}>Post notice</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main style={{minHeight:"100vh",background:"#fff",color:TX,fontFamily:"ui-sans-serif,system-ui,-apple-system,sans-serif",fontSize:"13px"}}>

      <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 28px",borderBottom:`0.5px solid ${BD}`}}>
        <div>
          <div style={{fontSize:"18px",fontWeight:500,letterSpacing:"-0.3px"}}>Z-Factoring</div>
          <div style={{fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase",color:TX4,marginTop:"1px"}}>Government Insight Platform</div>
        </div>
        <div style={{display:"flex",gap:"20px",alignItems:"center",fontSize:"12px",color:TX3}}>
          <a href="#signals" style={{color:TX3,textDecoration:"none"}}>Live signals</a>
          <a href="#agencies" style={{color:TX3,textDecoration:"none"}}>By agency</a>
          <a href="#plans" style={{color:TX3,textDecoration:"none"}}>Plans</a>
          <a href="#contact" style={{color:TX3,textDecoration:"none"}}>Contact</a>
          <a href="#contact" style={{fontSize:"11px",padding:"6px 14px",background:P,color:"#fff",borderRadius:"5px",textDecoration:"none",fontWeight:500}}>Apply for access</a>
        </div>
      </nav>

      <div style={{display:"flex",alignItems:"center",gap:"0",borderBottom:`0.5px solid ${BD}`,background:BG,overflowX:"auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"5px",padding:"7px 16px",borderRight:`0.5px solid ${BD}`,flexShrink:0}}>
          <div style={{width:"5px",height:"5px",borderRadius:"50%",background:R}}></div>
          <span style={{fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:R,fontWeight:500}}>Active signal</span>
        </div>
        {[
          {text:"Water rates rising - 4.2M Bay Area residents affected",score:"10"},
          {text:"Oakland school budget - 18M shortfall - community response rising",score:"9"},
          {text:"Fire risk elevated - East Bay hills - wind advisory active",score:"9"},
          {text:"Food bank demand up 34% - Bay Area - supply signal critical",score:"8"},
        ].map((s, i) => (
          <div key={i} style={{display:"flex",alignItems:"center",gap:"8px",padding:"7px 16px",borderRight:`0.5px solid ${BD}`,flexShrink:0}}>
            <div style={{width:"5px",height:"5px",borderRadius:"50%",background:P,flexShrink:0}}></div>
            <span style={{fontSize:"11px",color:TX3,whiteSpace:"nowrap"}}>{s.text}</span>
            <ScoreBadge val={s.score} color={parseFloat(s.score)>=9?R:A} />
          </div>
        ))}
      </div>

      <section style={{padding:"52px 28px 48px",borderBottom:`0.5px solid ${BD}`,display:"grid",gridTemplateColumns:"1fr 380px",gap:"40px",alignItems:"center"}}>
        <div>
          <div style={{fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase",color:P,marginBottom:"14px",fontWeight:500}}>For city - county - state agencies</div>
          <h1 style={{fontSize:"34px",fontWeight:400,fontFamily:"Georgia,serif",lineHeight:1.25,letterSpacing:"-0.3px",marginBottom:"18px",color:TX}}>
            Community signals delivered<br />
            to your agency<br />
            <em style={{color:TX3}}>before they become crises.</em>
          </h1>
          <p style={{fontSize:"14px",color:TX3,lineHeight:1.7,maxWidth:"480px",marginBottom:"28px"}}>
            Z-Factoring processes local and global community signals and delivers them directly to government agencies. Know what your community is carrying. Respond with clarity. Build trust through timely action.
          </p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <a href="#contact" style={{fontSize:"13px",padding:"11px 22px",background:P,color:"#fff",borderRadius:"5px",textDecoration:"none",fontWeight:500}}>Apply for government access</a>
            <a href="#signals" style={{fontSize:"13px",padding:"11px 22px",border:`0.5px solid ${BD}`,borderRadius:"5px",textDecoration:"none",color:TX}}>See live signals</a>
          </div>
        </div>
        <div style={{background:BG,border:`0.5px solid ${BD}`,borderRadius:"8px",overflow:"hidden"}}>
          <div style={{padding:"12px 16px",borderBottom:`0.5px solid ${BD}`,background:PL,borderLeft:`3px solid ${P}`}}>
            <div style={{fontSize:"11px",fontWeight:500,color:PD}}>Oakland City Hall - Signal Dashboard</div>
            <div style={{fontSize:"10px",color:P,marginTop:"2px"}}>3 active signals - 2 require response</div>
          </div>
          {[
            {score:"10",title:"Water rate increase - community response HIGH",tag:"Public Works",urgent:true},
            {score:"9",title:"School budget cuts - parent signal rising fast",tag:"Schools",urgent:true},
            {score:"8",title:"Food bank demand - supply chain signal",tag:"Health",urgent:false},
            {score:"7",title:"Housing policy - zoning signal active",tag:"Planning",urgent:false},
          ].map((s, i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 16px",borderBottom:`0.5px solid ${BD}`,background:s.urgent?"#fff":"#FAFAFA"}}>
              <ScoreBadge val={s.score} color={parseFloat(s.score)>=9?R:A} />
              <div style={{flex:1}}>
                <div style={{fontSize:"12px",color:TX,lineHeight:1.4}}>{s.title}</div>
              </div>
              <span style={{fontSize:"9px",padding:"2px 6px",background:PL,color:PD,borderRadius:"3px",flexShrink:0}}>{s.tag}</span>
              {s.urgent && <span style={{fontSize:"9px",padding:"2px 6px",background:RL,color:RD,borderRadius:"3px",flexShrink:0}}>Respond</span>}
            </div>
          ))}
          <div style={{padding:"10px 16px",display:"flex",gap:"8px"}}>
            <div style={{flex:1,padding:"7px",background:P,borderRadius:"5px",fontSize:"11px",color:"#fff",textAlign:"center",cursor:"pointer"}}>Post public notice</div>
            <div style={{flex:1,padding:"7px",border:`0.5px solid ${BD}`,borderRadius:"5px",fontSize:"11px",color:TX3,textAlign:"center",cursor:"pointer"}}>View all signals</div>
          </div>
        </div>
      </section>

      <section id="signals" style={{borderBottom:`0.5px solid ${BD}`}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 28px",background:PL,borderBottom:`0.5px solid ${BD}`,borderLeft:`3px solid ${P}`}}>
          <div style={{fontSize:"12px",fontWeight:500,color:PD}}>Live community signals - Bay Area - today</div>
          <div style={{fontSize:"11px",color:P}}>Updated every 2 hours</div>
        </div>
        <SignalRow score="10" title="Water rates rising across Bay Area - 4.2M residents face utility cost surge" tag="Public Works" agency="SFPUC" time="2h ago" />
        <SignalRow score="10" title="Arizona aquifer depleting - 200yr replenish - farm wells now 1 mile deep" tag="Environment" agency="AP News" time="4h ago" />
        <SignalRow score="9" title="Oakland school district faces 18M budget shortfall - programs at risk" tag="Education" agency="East Bay Times" time="5h ago" />
        <SignalRow score="9" title="Food bank demand up 34% across Bay Area - supply chain under pressure" tag="Health" agency="SF Chronicle" time="6h ago" />
        <SignalRow score="9" title="Fire risk elevated - East Bay hills - wind advisory - evacuation prep signal" tag="Emergency" agency="Oakland Fire" time="1h ago" />
        <SignalRow score="8" title="Housing policy signal - new zoning proposal - community response rising" tag="Planning" agency="City Hall" time="8h ago" />
        <SignalRow score="8" title="Nevada wild horses near extinction - 83 wells dropped to 21 - water signal" tag="Environment" agency="Reuters" time="5h ago" />
        <SignalRow score="7" title="Boeing FAA probe - 737 MAX - community aviation trust signal" tag="Safety" agency="AP News" time="7h ago" />
        <div style={{padding:"12px 28px",background:BG,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:"12px",color:TX4}}>Showing 8 of 24 signals today</span>
          <a href="#contact" style={{fontSize:"12px",color:P,textDecoration:"none"}}>Get full signal access - Apply for Z-Factoring</a>
        </div>
      </section>

      <section id="agencies" style={{borderBottom:`0.5px solid ${BD}`}}>
        <div style={{padding:"10px 28px",background:PL,borderBottom:`0.5px solid ${BD}`,borderLeft:`3px solid ${P}`}}>
          <div style={{fontSize:"12px",fontWeight:500,color:PD}}>Solutions by agency type</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0"}}>
          {[
            {
              name:"City Hall - County Government",
              color:P,
              bg:PL,
              signals:["Budget signal - community response","Zoning change - neighborhood impact","Public meeting - attendance signal","Policy signal - constituent sentiment"],
              value:"Monitor what your constituents are about to ask you about. Post public notices directly to community before meetings. Know the signal before it becomes a complaint."
            },
            {
              name:"Police - Fire - Emergency Services",
              color:R,
              bg:RL,
              signals:["Safety signal - severity scored","Evacuation zone - resident alert","Recovery signal - community needs","Infrastructure - response readiness"],
              value:"Real time community safety signals. Alert residents in affected areas instantly. Coordinate response before situation escalates into crisis."
            },
            {
              name:"Schools - Education Districts",
              color:A,
              bg:AL,
              signals:["Family stress signal - district wide","Budget impact - parent community","Safety signal - school proximity","Attendance pattern - wellbeing signal"],
              value:"Track family wellbeing signals across your district. Monitor community issues affecting student attendance and performance. Communicate changes to affected families first."
            },
            {
              name:"Public Works - Utilities - Planning",
              color:T,
              bg:TL,
              signals:["Water rate signal - resident impact","Infrastructure signal - maintenance","Service disruption - affected area","Zoning signal - community response"],
              value:"Alert communities about service disruptions before complaints arrive. Track infrastructure signal strength. Communicate rate changes with full community context."
            },
          ].map((agency, i) => (
            <div key={agency.name} style={{padding:"20px 24px",borderRight:i%2===0?`0.5px solid ${BD}`:"none",borderBottom:`0.5px solid ${BD}`,borderLeft:`3px solid ${agency.color}`}}>
              <div style={{fontSize:"13px",fontWeight:500,color:TX,marginBottom:"8px"}}>{agency.name}</div>
              <div style={{fontSize:"12px",color:TX3,lineHeight:1.65,marginBottom:"14px"}}>{agency.value}</div>
              <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
                {agency.signals.map(sig => (
                  <div key={sig} style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"11px",color:TX4,padding:"5px 0",borderBottom:`0.5px solid ${BD}`}}>
                    <div style={{width:"5px",height:"5px",borderRadius:"50%",background:agency.color,flexShrink:0}}></div>
                    {sig}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"36px 28px",borderBottom:`0.5px solid ${BD}`,background:BG}}>
        <div style={{fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase",color:TX4,marginBottom:"8px"}}>How it works</div>
        <div style={{fontSize:"18px",fontWeight:500,marginBottom:"28px",color:TX}}>Four steps from signal to agency response</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}}>
          {[
            {num:"01",title:"Signal detected",body:"Z-Factoring monitors local and global publications daily. Every story scored for community impact and government relevance."},
            {num:"02",title:"Z-Factored",body:"Each signal processed through three lenses. The news. The human reality. The question your community is asking your agency."},
            {num:"03",title:"Agency matched",body:"Signals filtered by your jurisdiction, department, and topic areas. Only signals relevant to your agency and community reach you."},
            {num:"04",title:"Delivered + acted",body:"Morning digest to your team. Real-time alerts for high-score signals. Post public notices directly from your dashboard."},
          ].map(step => (
            <div key={step.num} style={{padding:"18px",background:"#fff",border:`0.5px solid ${BD}`,borderRadius:"6px",borderTop:`2px solid ${P}`}}>
              <div style={{fontSize:"11px",fontWeight:500,color:P,marginBottom:"8px"}}>Step {step.num}</div>
              <div style={{fontSize:"13px",fontWeight:500,color:TX,marginBottom:"6px"}}>{step.title}</div>
              <div style={{fontSize:"12px",color:TX3,lineHeight:1.6}}>{step.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" style={{padding:"36px 28px",borderBottom:`0.5px solid ${BD}`}}>
        <div style={{fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase",color:TX4,marginBottom:"8px"}}>Plans</div>
        <div style={{fontSize:"18px",fontWeight:500,marginBottom:"28px",color:TX}}>Simple government pricing</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {[
            {
              tag:"Department",price:"$500",period:"per month - 1 agency",name:"Agency signals",
              desc:"Essential community intelligence for a single government department.",
              features:["Signal digest daily","Emergency broadcast","Public notices","Community feedback","1 jurisdiction"],
              featured:false
            },
            {
              tag:"City - County",price:"$2,000",period:"per month - all departments",name:"Citywide signals",
              desc:"Full platform deployment across all city or county departments.",
              features:["All departments","Citywide broadcast","API integration","Analytics dashboard","Annual contract"],
              featured:true
            },
            {
              tag:"Enterprise",price:"Custom",period:"annual contract",name:"Regional signals",
              desc:"Multi-city or regional deployment with custom integration.",
              features:["Multi-jurisdiction","Custom integration","Dedicated support","SLA guarantee","Training included"],
              featured:false
            },
          ].map(plan => (
            <div key={plan.tag} style={{padding:"22px",border:plan.featured?`2px solid ${P}`:`0.5px solid ${BD}`,borderRadius:"6px",background:"#fff"}}>
              <div style={{fontSize:"10px",fontWeight:500,padding:"2px 8px",borderRadius:"3px",background:PL,color:PD,display:"inline-block",marginBottom:"12px"}}>{plan.tag}</div>
              <div style={{fontSize:"26px",fontWeight:500,color:TX}}>{plan.price}</div>
              <div style={{fontSize:"11px",color:TX4,marginBottom:"14px"}}>{plan.period}</div>
              <div style={{fontSize:"14px",fontWeight:500,color:TX,marginBottom:"6px"}}>{plan.name}</div>
              <div style={{fontSize:"12px",color:TX3,lineHeight:1.5,marginBottom:"16px"}}>{plan.desc}</div>
              <div style={{display:"flex",flexDirection:"column",gap:"0",marginBottom:"18px"}}>
                {plan.features.map(f => (
                  <div key={f} style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",color:TX3,padding:"6px 0",borderBottom:`0.5px solid ${BD}`}}>
                    <div style={{width:"5px",height:"5px",borderRadius:"50%",background:P,flexShrink:0}}></div>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#contact" style={{display:"block",textAlign:"center",padding:"9px",fontSize:"12px",fontWeight:500,borderRadius:"5px",textDecoration:"none",background:plan.featured?P:"transparent",color:plan.featured?"#fff":TX,border:plan.featured?"none":`0.5px solid ${BD}`}}>
                {plan.price==="Custom"?"Contact us":"Apply now"}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{padding:"36px 28px",borderBottom:`0.5px solid ${BD}`}}>
        <div style={{fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase",color:TX4,marginBottom:"8px"}}>Contact</div>
        <div style={{fontSize:"18px",fontWeight:500,marginBottom:"8px",color:TX}}>Apply for government access</div>
        <p style={{fontSize:"13px",color:TX3,marginBottom:"24px",maxWidth:"480px"}}>Z-Factoring works with city, county, and state agencies. All plans require application and approval. Contact us to begin.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",maxWidth:"500px"}}>
          <div>
            <div style={{fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.1em",color:TX4,marginBottom:"4px"}}>Contact</div>
            <div style={{fontSize:"14px",fontWeight:500,color:TX}}>Terrence Lee</div>
          </div>
          <div>
            <div style={{fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.1em",color:TX4,marginBottom:"4px"}}>Email</div>
            <a href="mailto:terry@geobond.app" style={{fontSize:"14px",color:P,textDecoration:"none",fontWeight:500}}>terry@geobond.app</a>
          </div>
          <div>
            <div style={{fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.1em",color:TX4,marginBottom:"4px"}}>Platform</div>
            <div style={{fontSize:"14px",color:TX}}>Z-Factoring</div>
          </div>
          <div>
            <div style={{fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.1em",color:TX4,marginBottom:"4px"}}>Part of</div>
            <a href="https://etherom.com" style={{fontSize:"14px",color:TX3,textDecoration:"none"}}>Etherom</a>
          </div>
        </div>
      </section>

      <footer style={{padding:"14px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",background:BG,borderTop:`0.5px solid ${BD}`}}>
        <span style={{fontSize:"11px",color:TX4}}>Z-Factoring - Government Insight Platform - Part of Etherom</span>
        <div style={{display:"flex",gap:"16px",fontSize:"11px"}}>
          <a href="https://z-factors.com" style={{color:TX4,textDecoration:"none"}}>Z-Factors</a>
          <a href="https://geobond.app" style={{color:TX4,textDecoration:"none"}}>GeoBond</a>
          <a href="https://etherom.com" style={{color:TX4,textDecoration:"none"}}>Etherom</a>
        </div>
      </footer>

    </main>
  );
}
