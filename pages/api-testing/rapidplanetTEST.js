import styles from '../../styles/Home.module.css'

export default function PlanetsTest () {

    const [planets, setPlanets] = useState();
    const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list';

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'cd1d39da66msh0174a15141798a2p1bcccajsn97a12c5766e4',
              'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            }
          };

        fetch(url, options)
        .then (response => response.json())
        .then (response =>{
            console.log(response);
            setPlanets(response);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>
        <main className={styles.main}>
            {
                planets && planets.map((d) => {
                    return(
                        <div key={d.div}>
                            <h2>{d.name}</h2>
                            {d.description}
                            <Image src={d.imgSrc[0].img} width='100' height='100'/>
                        </div>
                    )
                })
            }
            
        </main>
        </>
    )
}