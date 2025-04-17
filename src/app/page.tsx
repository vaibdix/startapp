import Card from "../components/Card";
import { logos } from "../components/LogoData";
import WeatherInfo from "../components/WeatherInfo";

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <div className="mb-6 mt-6">
                <WeatherInfo />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {logos.map((logo, index) => (
                    <Card 
                        key={index} 
                        iconPath={logo.path} 
                        name={logo.name} 
                        url={logo.url} 
                    />
                ))}
            </div>
        </div>
    );
}