import image from '../assets/image.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.png'

export default function Services() {
  return (
    <section className="py-20 bg-[#0f0f3d] text-white">
      <div className="container mx-auto px-4">
        {/* Service Items - Vertically stacked with larger images */}
        <div className="flex flex-col space-y-32">
          {/* Item 1 - DEX Insights */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-3/5">
              <img
                src={image}
                alt="Bitcoin with digital connections"
                className="rounded-xl w-full h-auto object-cover shadow-lg shadow-[#0bb5e0]/20"
              />
            </div>
            <div className="w-full md:w-2/5">
              <h3 className="text-3xl font-bold text-[#0bb5e0] mb-6">Unlock Real-Time DEX Insights</h3>
              <p className="text-gray-300 text-lg">
                Discover in-depth insights into Token movements with Token View. Access dedicated pages for each token,
                track smart money flows, explore token holdings, and view detailed price charts. Analyze data through
                comprehensive tables to make better decisions with all the information at your fingertips.
              </p>
            </div>
          </div>

          {/* Item 2 - Token Data */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-3/5">
              <img
                src={image1}
                alt="Blockchain visualization"
                className="rounded-xl w-full h-auto object-cover shadow-lg shadow-[#0bb5e0]/20"
              />
            </div>
            <div className="w-full md:w-2/5">
              <h3 className="text-3xl font-bold text-[#0bb5e0] mb-6">Gain Access to Token Data</h3>
              <p className="text-gray-300 text-lg">
                Explore specific pages for each token and track smart money movements. Stay updated on token holdings
                and view real-time price charts that help you make smarter decisions.
              </p>
            </div>
          </div>

          {/* Item 3 - DeFi Portfolio */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-3/5">
              <img
                src={image2}
                alt="DeFi portfolio visualization"
                className="rounded-xl w-full h-auto object-cover shadow-lg shadow-[#0bb5e0]/20"
              />
            </div>
            <div className="w-full md:w-2/5">
              <h3 className="text-3xl font-bold text-[#0bb5e0] mb-6">Analyze DeFi Portfolio Performance</h3>
              <p className="text-gray-300 text-lg">
                Gain a clear overview of your decentralized finance (DeFi) portfolio with Ark's performance analytics.
                Instantly view real-time updates on your assets, track yields, and monitor historical trends, enabling
                you to stay informed on your portfolio's progress and make data-driven decisions with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
