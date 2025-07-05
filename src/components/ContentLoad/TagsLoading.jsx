export default function TagsLoading ({ numTags = 10 }) {
  const fakeText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At omnis qui ullam quae illo nisi quam, magnam, alias fuga beatae suscipit earum. Ex tempore quaerat, provident delectus repellat iure rerum, amet eum error reiciendis iusto eaque voluptate necessitatibus accusantium blanditiis id distinctio! Repellendus voluptates itaque autem temporibus nisi repellat in?'
  const prueba = fakeText.split(' ').slice(0, numTags)
  return (
    <ul className='flex gap-4 flex-wrap mt-4'>
      {
        prueba.map((text, index) => (
          <li
            key={index}
            className='animate-pulse bg-botones before:content-[""] before:text-text-hover/90 w-fit  h-10'
          >

            {text}
          </li>
        ))
      }
    </ul>
  )
}
