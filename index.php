<?php
// Configuración de la base de datos
$host = "sql5.freesqldatabase.com"; // Host de FreeSQLDatabase
$dbname = "sql5774715";             // Nombre de la base de datos
$username = "sql5774715";           // Nombre de usuario de la base de datos
$password = "5Q7pHMQFPK";           // Contraseña de la base de datos

// Crear conexión
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Conexión exitosa a la base de datos. <br>";

    // Consulta de ejemplo
    $query = "SELECT * FROM estudiantes"; // Ajusta la tabla según tus necesidades
    $stmt = $conn->query($query);
    $students = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Mostrar los resultados de la consulta
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Nombre</th><th>Correo</th><th>Programa</th></tr>";
    foreach ($students as $student) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($student['id']) . "</td>";
        echo "<td>" . htmlspecialchars($student['nombre']) . "</td>";
        echo "<td>" . htmlspecialchars($student['correo']) . "</td>";
        echo "<td>" . htmlspecialchars($student['programa']) . "</td>";
        echo "</tr>";
    }
    echo "</table>";

} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}

//cambios de prueba
// 2
?>
