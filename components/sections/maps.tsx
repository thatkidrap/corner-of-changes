export default function Maps() {
  return (
    <section id="maps" className="section-spacing bg-card">
      <div className="container-custom">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-10">
          <h2 className="text-foreground">Drop Your Empties Here!</h2>
          <p className="text-foreground/70 text-lg">
            Check out our corner box locations around FISIP UB — it's easy, safe, and sustainable!
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4812.777426609833!2d112.61101495531517!3d-7.949893568585151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827bc35467e1%3A0x364f4b5e8098aa2e!2sFISIP%20Universitas%20Brawijaya!5e0!3m2!1sid!2sid!4v1763025036027!5m2!1sid!2sid" 
            height="450" 
            title="FISIP Universitas Brawijaya Location Map"
            className="w-full rounded-xl border border-border shadow-sm" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}