type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages `
          : "welcome Guest"}
      </h2>
    </div>
  );
}
