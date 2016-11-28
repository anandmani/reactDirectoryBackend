command to run: SET DEBUG=reactDirectoryBackend:* & npm start.

There is no hot reload. Keep re-running above command to see changes.

console.log gets logged in terminal.

Just look at routes>index.js, dont have to mess with the rest.

Tutorial at: https://www.youtube.com/watch?v=FqMIyTH9wSg  Node.js tutorial for beginners 2014 - an introduction to Node.js with Express.js

Running on port 9000. Look at bin>www file

For allowing CORS, we need to add Access-Control-Allow-Origin and a bunch of other headers to the response sent. router.use is applied to all request (get, post,etc.). When we make a call CORS call with browsers, first an OPTIONS (preflight ) call is made before POST/GET

When passing a payload in front-end, always JSON stringify the javascript object! javascript objects are not the same as JSON. Failure to do so may incorrectly show CORS failure


-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2016 at 05:45 AM
-- Server version: 5.5.49-log
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `patients`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient_details`
--

CREATE TABLE `patient_details` (
  `patient_id` int(4) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `age` int(3) NOT NULL,
  `DOB` varchar(10) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `additional_info` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient_details`
--

INSERT INTO `patient_details` (`patient_id`, `firstname`, `lastname`, `age`, `DOB`, `gender`, `phone`, `additional_info`) VALUES
(1, 'Bob', 'Marley', 99, '1-2-1960', 'Male', '2222222222', 'Bob is whack!'),
(1859, 'anand', 'money', 1, '1-1-2000', 'Male', '11111111', 'abcd'),
(9786, 'Snoop', 'Dogg', 33, '1-1-1970', 'Male', '+33-333333333', 'Get real, homie');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient_details`
--
ALTER TABLE `patient_details`
  ADD PRIMARY KEY (`patient_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
