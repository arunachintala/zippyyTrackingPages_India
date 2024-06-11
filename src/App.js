// import React from 'react'
// import Page4 from './Components/Pages/Page4';
// function App() {
//     return (
//         <Page4 />
//     )
// }
// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Page1 from './components/Page1'; // Adjust the path as necessary
// import Page2 from './components/Page2'; // Create and import your Page2 component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Page1 />} />
//         <Route path="/page2" element={<Page2 />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Page1 from './components/Page1'; // Adjust the path as necessary
// import Page2 from './components/Page2'; // Adjust the path as necessary
// import Page3 from './components/Page3'; // Adjust the path as necessary

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Page1 />} />
//         <Route path="/page2" element={<Page2 />} />
//         <Route path="/page3" element={<Page3 />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Page1 from '../src/Components/Pages/Page1';
// import Page2 from '../src/Components/Pages/Page2';
// import Page3 from '../src/Components/Pages/Page3';
// import Page4 from '../src/Components/Pages/Page4';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     <Route path="/" element={<Page1 />} />
//                     <Route path="/page2" element={<Page2 />} />
//                     <Route path="/page3" element={<Page3 />} />
//                     <Route path="/page4" element={<Page4 />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from '../src/Components/Pages/Page1';
import Page2 from '../src/Components/Pages/Page2';
import Page3 from '../src/Components/Pages/Page3';
import Page4 from '../src/Components/Pages/Page4';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
