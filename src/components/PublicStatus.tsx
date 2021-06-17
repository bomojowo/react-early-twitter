function PublicStatus(): JSX.Element {
  return (
    <section>
      <h2>public status</h2>
      <ul>
        <li>
          {/* Note: there would be a way for us to reuse StatusItem here */}
          {/* but we won't worry about that right now */}
          💬 <a href="#">jack</a>: wondering when Mer is going to show up
        </li>
      </ul>
    </section>
  );
}

export default PublicStatus;
