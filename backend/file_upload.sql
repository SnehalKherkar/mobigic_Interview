-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2023 at 06:32 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `file_upload`
--

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `file_upload` text NOT NULL,
  `code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `user_id`, `file_upload`, `code`) VALUES
(1, 3, 'file:///C:/Users/admin/Downloads/Snehal\'s%20Resume%20(2).pdf', '123456'),
(2, 1, 'Angular CV (1).pdf', ''),
(7, 6, 'NikitaRGade_SoftwareTestEngineer_3+yrsOfExperience_Resume. (1) (1).pdf', ''),
(8, 6, 'NikitaRGade_SoftwareTestEngineer_3+yrsOfExperience_Resume. (1) (1).pdf', ''),
(9, 5, 'Angular CV (1).pdf', ''),
(10, 7, 'Angular CV (1).pdf', ''),
(11, 8, 'Snehal\'s Resume (2).pdf', ''),
(14, 9, 'Snehal\'s Resume (1).pdf', ''),
(16, 9, 'Snehal\'s Resume (2).pdf', ''),
(17, 9, 'Snehal_CV (2).pdf', ''),
(18, 9, 'Angular CV (1).pdf', ''),
(19, 10, 'Shailesh\'s Resume.pdf', ''),
(20, 10, 'tech_2023-05-20-14-44-43_3746cf78aee6f47621382d5b072284e6 (1) (2).pdf', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'snehal', 'shehal@123', 'sk12345'),
(2, 'sakshi', 'sakshi@123', 'sakshi123'),
(3, 'ranu', 'ranu@12', 'sk123'),
(4, 'harsha', 'harsha@gail', 'har123'),
(5, 'sarthk', 'sarthk@12', '1234'),
(6, 'sailesh', 'sailesh@12', '123'),
(7, 'soham', 'soham@12', '1234'),
(8, 'bilkis', 'bil@12', '123'),
(9, 'jenni', 'jenny@12', '123'),
(10, 'atul', 'atul@12', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
