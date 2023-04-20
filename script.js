/**
 * 1 - создание элемента
 * - отображение на странице
 */

// const main = document.createElement('div');
// main.classList.add('main');
// main.setAttribute('data-id', '35k4et');
// main.innerText = 'Main content';

// const h2 = document.createElement('h2');
// h2.innerText = 'Header';

// const p = document.createElement ('p');
// p.innerText = 'lorem ipsum dolor sit amet';

// main.append(h2, p);
// document.getElementById('root1').append(main);


// //--------------------------------------

// const h2R = React.createElement('h2', null, 'Header react');
// const pR = React.createElement('p', null,'lorem ipsum dolor sit amet');

// const mainReact = React.createElement('div', 
// {
//     className: 'main-react class2 class3',
//     'data-id': '35h4k5h',
// },
// [
//     'Main react content',
//     h2R,
//     pR,
//     React.createElement('img', {
//         src: 'https://via.placeholder.com/200',
//         alt:'###',
//     }),
// ]

// );

// //const root = ReactDOM.createRoot(document.getElementById('root2'));
// //root.render(mainReact);

// /**
//  * 3 -сщздание компоненты
//  */

// function Logo() {
//     this.create = () => {
//         this.elem = document.createElement('div');
//         this.elem.classList.add('logo');
//         this.elem.innerHTML = `
//         <a href="#" >
//         <img src="https://via.placeholder.com/150" alt="##"  />
//         </a>
//         `;
//         return this.elem;
//     }
    
// }

// const logo = new Logo().create();
// document.getElementById('root1').append(logo);

// function ReactLogo() {
//     const logo = React.createElement('div',
//     { className: 'logo-react' },
//     React.createElement('a', {href: '#' },
//     [React.createElement('img', {
//         src: "https://via.placeholder.com/250",
//         alt: '###'
//     }),
//     'Home'
// ]
    
//     )
//     );
//     return logo;
// }

// const root = ReactDOM.createRoot(document.getElementById('root2'));

// root.render(React.createElement('div', null [
//     mainReact, ReactLogo()

// ]));

// /**
//  * JSX
//  */

// const root2 =React.createElement(Document.getElementById('root3'));

// root2.render(
//     <React.Fragment>
//        < div className="main" data-id='35j34hk'>
//         <h2 id="title2">HeaderJSX</h2>
//         <div className="logo">
//         <a href='#'>
//           <img src="https://via.placeholder.com/300" alt="#"  />  
//           Home
//           </a> 
//         </div>
        
//        </div>
    
//      </React.Fragment>
// )

/**
 * 4 - пропсы
 * 5- стейты
 * 6- события
 */


// function Header(props) {
//     return(
//         <header className="header">
//             Header content{props.content}, {props.a + props.b}
//         </header>
//     );
// }

// class Header2 extends React.Component{
//     constructor(props) {
//         super();
//     }
//     //code
//     render(){
//         return(
// <header className="header2">
//             Header class content{this.props.content}, {this.props.a + props.b}
//         </header>
//         )   
//      }
//     }

//     function Block(props) {
//         return(
//             <div>{props.children}</div>
//         )
//     }

//     const root = ReactDom.createRoot(Document.getElementById('root1'));
//     root.render(
//         <>
//         <Header content = 'content is header' a={4} b={10}/>
//         <Header2 content = 'content is header' a={4} b={10}/>
//         <Block>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, quaerat.
//         </Block>
//         </>
//     )

//     /**
//  * 5- стейты
//  * 6- событияjj
//  */

//     function ButtonLike(){
//         cont[count, setCount] = React.useState(0)


//         return(
//             <button><Like>{count}</Like></button>
//         )
//     }

//     class ButtonLike extends React.Component{
//         constructor() {
//             super();
//             this.state = {
//                 count:0
//             }
//         }
//         render() {
//             return(
//                 <button>DiLice{}this.state.count</button>
//             );
//         }
//     }

//     const root2 = ReactDOM.createRoot(Document.getElementById('root2'));
//     root.render(
//         <>
//         <ButtonLike/>
//         <ButtonDiLike/>
//         </>
//     );







/**
 * 1 - создание элемента
 * 2- отображение на странице
 */


// const main = document.createElement('div');// код в JS
// main.classList.add('main');
// main.setAttribute('data-id', '3598ku');
// main.innerText = 'Main content';

// const h2 = document.createElement('h2');
// h2.innerText = 'Header';

// const p = document.createElement('p');
// p.innerText = 'Lorem ipsum dolor sit amet';

// main.append(h2, p);
// document.getElementById('root1').append(main);

// //------------------------------- этот же код в Реакте

// const h2R = React.createElement('h2', null, 'Header react');
// const pR = React.createElement ('p', null, 'Lorem ipsum dolor sit amet')

// const mainReact = React.createElement('div',
// {
//     className: 'main-react class2 class3',
//     'data-id': '3597poi',
// },
//     [
//         'main react content',
//         h2R,
//         pR,
//         React.createElement('img', { // тоже можно создавать элементы
//             src: 'https://via.placeholder.com/200',
//             alt: '###',
//         })
//     ]
// );

// // const root = ReactDOM.createRoot(document.getElementById('root2'));
// // root.render(mainReact);

// /**
//  * 3 - сщздание компоненов
//  */

// function Logo() { // js
//     this.create = () => {
//         this.elem = document.createElement('div');
//         this.elem.classList.add('logo');
//         this.elem.innerHTML = `
//         <a href="#">
//             <img src="https://via.placeholder.com/150" alt="##" />
//         </a>
//         `
//         return this.elem; 
//     } 
// }
//  const logo = new Logo().create();
//  document.getElementById('root1').append(logo);


// function ReactLogo() {// react
//     const logo = React.createElement('div',
//     {className: 'logo-react' }, 
//     React.createElement('a', {href: '#'},
//     [React.createElement('img', {
//         src: "https://via.placeholder.com/250",
//          alt: "##" 
//     }),
//         'Home'
//     ]
//     )
//     );
//     return logo;
// }

// const root = ReactDOM.createRoot(document.getElementById('root2'));

// root.render(React.createElement('div', null, [
//     mainReact,ReactLogo()
// ]));

// /**
//  * JSX => React
//  */

//  const root2 = ReactDOM.createRoot(document.getElementById('root3'));

//  root2.render(
//     <React.Fragment>
//          <div className="main" data-id = '359785'>
//              <h2 id="title2">Header JSX</h2>
//              <p>Lorem ipsum dolor sit amet consectetur.</p>
//             <div className="logo">
//                  <a href="#">
//                      <img src="https://via.placeholder.com/300" alt="#" />
//                  </a>
//              </div>
//          </div>
//      </React.Fragment>
// );

/**
 * 4- Пропсы
 * 5-Стейты
 * 6- события
 * 
 */

function Header(props) {//функциональный компонент
    return(
        <header className="header">
            Header content {props.content}, {props.a + props.b}
        </header>
    );
}

class Header2 extends React.Component {
    constructor(props) {
        super();
    }
    //code
    render() {
        return(
            <header className="header2">
                Header class content{this.props.content}, {this.props.a + this.props.b}
            </header>
        )
    }
}

function Block(props) {
    return(
        <div>{props.children}</div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
    <>
    <Header content = 'content is header'a={4} b={10}/>
    <Header2 content = 'content is header'a={'4'} b={'10'}/>
    <Block>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ducimus!
    </Block>
    </>
);

/**
 * 5-стейты- состояние компоненты
 * 6-события
 */

function ButtonLike(){
    const[count, setCount] = React.useState(0)

    const LikeHandler = () => {
        //let value = count;
        //setCount(++ value);
        setCount(count + 1)
    }

    return(
        <button onClick={LikeHandler}>Like{count}</button>
    )
}

class ButtonDiLike extends React.Component{
    constructor() {
        super();
        this.state = {
            count: 0
        };
this.disLikeHandler = this.disLikeHandler.bind(this);
    }

    disLikeHandler() {
        let value = this.state.count;
        this.setState({
            count: ++value,
        });
    }

    render() {
        return(
            <button onClick={this.disLikeHandler}>Dilike{this.state.count}</button>
        );
       
    }
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <>
    <ButtonLike/>
    <ButtonDiLike/>
    </>
);



