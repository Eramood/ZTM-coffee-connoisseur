import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () =>{
   const router= useRouter();
   const query = router.query.id;
   return (
      <div>Coffee shoppp is {query},
      <Link href="/">
         click here to go Home
      </Link>
      </div>
   )
};
export default CoffeeStore;
