// import Rhf from '@/components/rhf'
// import SimpleForm from '@/components/simple'
import RhfWithZod from '@/components/rhf-with-zod'
// import RhfWithAction from '@/components/with-action'
// import Form from '@/components/form'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        {/* <h1 className='mb-16 text-2xl font-medium'>React Hook Forms</h1> */}
        {/* <SimpleForm /> */}
        {/* <Rhf /> */}
        <RhfWithZod />
        {/* <RhfWithAction /> */}
        {/* <Form /> */}
      </div>
    </section>
  )
}
