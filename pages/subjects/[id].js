import axios from 'axios';
import SubjAttributes from '../Components/';

export const getServerSideProps = async (ctx) => {
   const bookId = ctx.params?.id
   const url = 'http://localhost:3000/api/book';
   const response = await axios.get(url, { params: { _id: bookId} })

   return {
      props: {
        book: response.data
      }
   }

}

function Book({ book }) {
   return (
      <>
        <h1>Book Page</h1>
        <BookAttributes {...book} />
     </>
    )
}

export default Book;
