<?php 
$mysqli = new mysqli("localhost", "root", "", "my_database"); 
if ($mysqli->connect_error) { 
    exit('Could not connect'); 
} 
 
$sql = "SELECT users.id,users.username, posts.id, posts.title, posts.content 
        FROM users
        INNER JOIN posts ON users.id = posts.author_id 
        WHERE users.id = ?"; 
$stmt = $mysqli->prepare($sql); 
$stmt->bind_param("s", $_GET['q']); 
$stmt->execute(); 
$stmt->store_result(); 
$stmt->bind_result($idUser,$username,$idPosts, $title, $content); 
 
echo "<table>"; 
// Loop through the result set and display each row of data 
echo "<tr>"; 
echo "<th>ID users</th>"; 
echo "<th>Username</th>";
echo "<th>ID</th>";
echo "<th>Title</th>"; 
echo "<th>Content</th>"; 
echo "</tr>";
while ($stmt->fetch()) { 
    echo "<tr>"; 
    echo "<td>" . $idUser . "</td>";
    echo "<td>" . $username . "</td>";
    echo "<td>" . $idPosts . "</td>";
    echo "<td>" . $title . "</td>"; 
    echo "<td>" . $content . "</td>"; 
    echo "</tr>"; 
} 
 
echo "</table>"; 
 
$stmt->close(); 
?>