function Home() {
  const greetings = () => {
    const str = 'phonebook';
    const arr = str.split('');
    arr.forEach((el, i) =>
      setTimeout(() => {
        console.log(el);
      }, 2000 * (i + 1))
    );
  };
  const qwe = greetings();
  console.log(qwe);
  return <div>Home</div>;
}

export default Home;
