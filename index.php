<?php

require 'functions.php';
$data = query("SELECT * FROM data_contacts");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DASHBOARD</title>
        <!-- fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Freeman&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,700;1,800&display=swap"
      rel="stylesheet"
    />

    <!-- feather icons -->
    <script src="https://unpkg.com/feather-icons"></script>

    <!-- my style -->
    <link rel="stylesheet" href="admin.css" />
</head>
<body>
    <!-- <section id="admin"class="admin"> -->
    <h1 align=center>DASHBOARD ADMIN</h1>
    <h3 align=center>THE DAYS COFFEE</h3>
    <table border="1" cellpadding="25" cellspacing="3" align=center>
        <h2 align=center>Data Feedback Customer</h2>
        <tr class="table-row">
            <th>NO.</th>
            <th>Action</th>
            <th>Username</th>
            <th>Email</th>
            <th>Message</th>

        </tr>

        <?php $i = 1; ?>
        <?php foreach( $data as $row ) : ?>
        <tr>
            <td><?= $i; ?></td>
            <td> 
                <a class="action" href="#" class="action" style="text-decoration:none;">edit</a>   
                <a href="delete.php?id=<?= $row["id"]; ?>" onclick="return confirm('Anda Yakin Ingin Menghapus Data Ini?');" class="action" style="text-decoration:none;">delete</a> 
            <td><?= $row["username"]; ?></td>
            <td><?= $row["email"]; ?></td>
            <td><?= $row["message"]; ?></td>
        </tr>
        <?php $i++; ?>
        <?php endforeach; ?>
    </table>
        </section>
</body>
</html>