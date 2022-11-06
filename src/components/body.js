import './body.css'

function Body(){
    return(
        <div class="body">
            <h2 class="heading"><span>New Release Books</span></h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>ISBN13</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h3>Embracing Modern C++ Safely</h3></td>
                        <td><h3> </h3></td>
                        <td><p>9780137380350</p></td>
                        <td><p>$44.87</p></td>
                        <td><img src="https://itbook.store/img/books/9780137380350.png" alt="Embracing Modern C++ Safely"></img></td>
                        <td><a href="https://itbook.store/books/9780137380350">Link!</a></td>
                    </tr>
                    <tr>
                        <td><h3>Deno Succinctly</h3></td>
                        <td><h3> </h3></td>
                        <td><p>9781642002140</p></td>
                        <td><p>$0.00</p></td>
                        <td><img src="https://itbook.store/img/books/9781642002140.png" alt="Deno Succinctly"></img></td>
                        <td><a href="https://itbook.store/books/9781642002140">Link!</a></td>
                    </tr>
                    <tr>
                        <td><h3>Robotics, AI, and Humanity</h3></td>
                        <td><h3>Science, Ethics, and Policy</h3></td>
                        <td><p>9783030541729</p></td>
                        <td><p>$59.99</p></td>
                        <td><img src="https://itbook.store/img/books/9783030541729.png" alt="Robotics, AI, and Humanity"></img></td>
                        <td><a href="https://itbook.store/books/9783030541729">Link!</a></td>
                    </tr>
                    <tr>
                        <td><h3>Learning Go</h3></td>
                        <td><h3>An Idiomatic Approach to Real-World Go Programming</h3></td>
                        <td><p>9781492077213</p></td>
                        <td><p>$35.88</p></td>
                        <td><img src="https://itbook.store/img/books/9781492077213.png" alt="Learning Go"></img></td>
                        <td><a href="https://itbook.store/books/9781492077213">Link!</a></td>
                    </tr>
                    <tr>
                        <td><h3>Retro Gaming with Raspberry Pi, 2nd Edition</h3></td>
                        <td><h3> </h3></td>
                        <td><p>1001656317756</p></td>
                        <td><p>$0.00</p></td>
                        <td><img src="https://itbook.store/img/books/1001656317756.png" alt="Retro Gaming with Raspberry Pi, 2nd Edition"></img></td>
                        <td><a href="https://itbook.store/books/1001656317756">Link!</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Body; 