import './App.css'
import {useQuery} from "@tanstack/react-query";

function App() {
/*useLayoutEffect(() => {
   ( async function () {
       const response = await client.GET('/playlists')
       const data = response.data
      /!* const response = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists', {
           headers: {
               'api-key': '9cc584e7-e30a-4c86-a83b-87222be5dc3c'
           }
       });
       const  data = response.json()*!/
        console.log(data)
    })() },[])*/
    const query = useQuery({

    })
  return (
    <>
   Hello World!
    </>
  )
}

export default App
