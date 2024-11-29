import "./App.css";
import MultiCarousel from "./components/multiCarousel/MultiCarousel";
import Header from "./components/header/Header";
import SideMenu from "./components/sidemenu/SideMenu";
import Slider from "./components/slider/Slider";
import CateCard from "./components/cateCard/CateCard";
import CategorySection from "./components/categorySection/CategorySection";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<SideMenu />
				<main>
					<Slider />
					<section>
						<MultiCarousel totalCards={24} visibleCards={14} moveCards={3}>
							<CateCard />
						</MultiCarousel>
					</section>
					<CategorySection />
					<CategorySection />
					<CategorySection />
					<CategorySection />
				</main>
			</div>
		</div>
	);
}

export default App;
