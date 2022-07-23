import Feature from './components/Feature'
import Header from './components/Header'

const Home=()=> {
  return (
    <div>
      <Header />
      <div className='mx-4 mt-7 md:flex md:justify-between md:gap-4 md:max-w-7xl md:m-auto md:mt-11'>
        <Feature imgSrc={'/featureimg1.svg'} bg='bg-feature-img1' title='Search 2.0' content='loremipsumsdasd'/>
        <Feature imgSrc={'/featureimg2.svg'} bg='bg-feature-img2' title='TruCheck' content='loremipsumsdasd'/>
        <Feature imgSrc={'/featureimg3.svg'} bg='bg-feature-img3' title='Map View' content='loremipsumsdasd'/>
      </div>
    </div>
  )
}

export default Home;