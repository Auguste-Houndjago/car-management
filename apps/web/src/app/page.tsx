import { add } from '@car-management/sample-lib';

export default function Home() {
  return <div>hello world {add(343, 4)}</div>;
}

/* 

  const addition = add(5000, 5);

  const ajoute = Additions({ a: 5000, b: 5 });

<div className="flex flex-col">
      <div>

        hello next js {addition}
      </div>
      <div>
        <Additions a={5000} b={5} />

      </div>


    </div>
*/
