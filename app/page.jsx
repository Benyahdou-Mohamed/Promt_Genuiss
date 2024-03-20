import Feed from '@components/Feed'

const page = () => {
  
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Promps</span>
            <p className="desc text-center">
            Welcome to PromptGenius, where creativity knows no bounds.<br/>
            PromptGenius is an open-source AI prompting tool for modern world to
            discover, create and share creative prompts
            </p>
        </h1>
        <Feed></Feed>
    </section>
  )
}

export default page