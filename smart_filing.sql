-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 16, 2024 at 01:47 PM
-- Server version: 8.3.0
-- PHP Version: 8.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smart_filing`
--

-- --------------------------------------------------------

--
-- Table structure for table `submissions`
--

DROP TABLE IF EXISTS `submissions`;
CREATE TABLE `submissions` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `entity_type` varchar(250) NOT NULL,
  `company_name` varchar(250) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `submission_data` json NOT NULL,
  `status` varchar(250) NOT NULL,
  `checkout_session_id` varchar(250) NOT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `state` varchar(25) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `post_code` varchar(25) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `state_of_formation` varchar(25) DEFAULT NULL,
  `date_of_formation` date DEFAULT NULL,
  `company_address` varchar(255) DEFAULT NULL,
  `company_state` varchar(25) DEFAULT NULL,
  `company_city` varchar(25) DEFAULT NULL,
  `company_post_code` varchar(15) DEFAULT NULL,
  `ssn` int NOT NULL DEFAULT '0',
  `itin` int NOT NULL DEFAULT '0',
  `ss_number` varchar(25) DEFAULT NULL,
  `product_name` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `submissions`
--

INSERT INTO `submissions` (`id`, `user_id`, `entity_type`, `company_name`, `creation_date`, `submission_data`, `status`, `checkout_session_id`, `firstname`, `lastname`, `mobile`, `email`, `address`, `state`, `city`, `post_code`, `state_of_formation`, `date_of_formation`, `company_address`, `company_state`, `company_city`, `company_post_code`, `ssn`, `itin`, `ss_number`, `product_name`) VALUES
(1, 33, 'LLC', 'Key Venture', '2024-03-08 20:46:05', '{\"ssn\": \"123-45-6789\", \"last_name\": \"Doe\", \"first_name\": \"John\", \"email_address\": \"john.doe@keyventure.com\"}', 'Processing', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(2, 33, 'LLC', 'Cleanaroo', '2024-03-08 20:46:22', '{\"ssn\": \"987-65-4321\", \"last_name\": \"Smith\", \"first_name\": \"Jane\", \"email_address\": \"jane.smith@cleanaroo.com\"}', 'Processing', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(3, 33, 'LLC', 'Lovely Housekeeping', '2024-03-08 20:46:40', '{\"ssn\": \"456-78-9012\", \"last_name\": \"Johnson\", \"first_name\": \"Alice\", \"email_address\": \"alice.johnson@lovelyhousekeeping.com\"}', 'Processing', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(5, 33, 'LLC', 'Coach Office', '2024-03-08 22:09:09', '{\"ssn\": \"789-12-3456\", \"last_name\": \"Williams\", \"first_name\": \"Bob\", \"email_address\": \"bob.williams@coachoffice.com\"}', 'Processing', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(6, 33, 'LLC', 'Bright Attire', '2024-03-08 22:09:11', '{\"ssn\": \"234-56-7890\", \"last_name\": \"Brown\", \"first_name\": \"Emily\", \"email_address\": \"emily.brown@brightattire.com\"}', 'Processing', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(7, 33, 'LLC', 'The Wardrobe', '2024-03-08 22:09:13', '{\"ssn\": \"567-89-0123\", \"last_name\": \"Davis\", \"first_name\": \"Michael\", \"email_address\": \"michael.davis@thewardrobe.com\"}', 'Ready', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(23, 33, 'LLC', 'Nazim\'s Company', '2024-05-16 22:13:38', '{\"city\": \"\", \"email\": \"\", \"state\": \"\", \"industry\": \"X\", \"zip_code\": \"\", \"last_name\": \"\", \"designator\": \"LIMITED LIABILITY CO.\", \"first_name\": \"\", \"mobile_number\": \"\", \"street_address\": \"\", \"management_method\": \"The LLC will be managed by the LLC member(s)\", \"state_filing_time\": \"4 weeks\"}', 'Waiting Payment', 'cs_test_b1IcD1zzJP8m0lJGdjlWZUgFNfQIh3rFwaYQpGtpq3jGrspQfWl8wSu1fT', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(21, 33, 'LLC', 'The New Company', '2024-05-16 22:06:38', '{\"city\": \"\", \"email\": \"\", \"state\": \"\", \"industry\": \"Hair\", \"zip_code\": \"\", \"last_name\": \"\", \"designator\": \"L.L.C.\", \"first_name\": \"\", \"mobile_number\": \"\", \"street_address\": \"\", \"management_method\": \"The LLC will be managed by the LLC member(s)\", \"state_filing_time\": \"4 weeks\"}', 'Ready', 'cs_test_b15FLkfMVIVtceLiiIJ53tw0qx5egr1YceJZ8OSuNOMqpqjSLAHzBRN6qM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(22, 33, 'LLC', 'The Newer Company', '2024-05-16 22:08:49', '{\"city\": \"\", \"email\": \"\", \"state\": \"\", \"industry\": \"XX\", \"zip_code\": \"\", \"last_name\": \"\", \"designator\": \"L.L.C.\", \"first_name\": \"\", \"mobile_number\": \"\", \"street_address\": \"\", \"management_method\": \"The LLC will be managed by the LLC member(s)\", \"state_filing_time\": \"5 business days\"}', 'Ready', 'cs_test_b1xMeRAZEemho1SIfQ8s0YmRAyy4uI1mecOKLVXMZVXFp0V8kaS7d9kIG4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(33, 34, 'EIN', 'Test', '2024-09-13 17:44:37', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(34, 34, 'EIN', 'chekcing', '2024-09-13 17:51:02', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(35, 34, 'EIN', 'Ayin, LLC', '2024-09-13 22:48:39', '{\"entity_zip\": \"90024\", \"trade_name\": \"\", \"entity_city\": \"LOS ANGELES\", \"entity_type\": \"LLC\", \"entity_state\": \"CA\", \"entity_address\": \"1717 MALCOLM AVE PH 1\", \"entity_legal_name\": \"Ayin, LLC\", \"principal_activity\": \"Real Estate\", \"product_or_service\": \"Real Estate\", \"reason_for_applying\": \"started_new_business\", \"date_business_started\": \"2024-08-05\", \"responsible_party_ssn\": \"625-19-6656\", \"responsible_party_name\": \"Ardavan Mashhadian\", \"responsible_party_address\": \"1717 Malcolm Ave #PH 1, Los Angeles, CA, 90024\"}', 'Waiting Payment', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(27, 35, 'LLC', 'Brazil', '2024-07-11 17:18:58', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(28, 35, 'LLC', 'Brazil', '2024-07-11 17:21:54', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(29, 40, 'EIN', 'My EIN Company', '2024-09-02 23:09:48', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(30, 34, 'EIN', 'Checking', '2024-09-13 17:33:42', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(31, 34, 'LLC', 'Checking', '2024-09-13 17:33:56', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(32, 34, 'Corporation', 'Test', '2024-09-13 17:35:46', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(36, 34, 'Professional Corporation', 'dd', '2024-09-14 19:51:20', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(37, 34, 'LLC', 'ZeeZov', '2024-09-14 19:51:35', '{\"agent_name\": \"Zee Zov\", \"agent_type\": \"corporate\", \"agent_address\": \"1220 Maple ave\"}', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(38, 34, 'LLC', 'zee zov ', '2024-09-14 19:56:45', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(39, 34, 'LLC', 'zee zov', '2024-09-14 19:57:19', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(40, 34, 'LLC', 'Zee Zov', '2024-09-14 20:05:15', '{\"llc_zip\": \"90015\", \"llc_city\": \"Los Angeles\", \"llc_state\": \"Ca\", \"agent_name\": \"Zee Zov\", \"agent_type\": \"individual\", \"llc_address\": \"1220 Maple\", \"agent_address\": \"1220 \", \"managers_members\": \"dfd\", \"management_method\": \"member_managed\", \"purpose_statement\": \"Cars\"}', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(42, 42, 'LLC', ',', '2024-09-19 11:22:10', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(43, 34, 'EIN', 'ZeeZov LLC', '2024-09-25 16:50:52', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(44, 43, 'LLC', 'Tetsing', '2024-09-27 22:57:35', '{\"llc_zip\": \"10011\", \"llc_city\": \"new york\", \"llc_state\": \"ny\", \"agent_name\": \"test\", \"agent_type\": \"individual\", \"llc_address\": \"abc 123 new york\", \"agent_address\": \"abc\", \"organizer_name\": \"asdasd\", \"managers_members\": \"abc\\r\\ndef\\r\\nghi\", \"management_method\": \"manager_managed\", \"organizer_address\": \"asdasd\", \"purpose_statement\": \"test\"}', 'Waiting Payment', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(45, 42, 'Professional Corporation', 'My Tax Filer', '2024-09-30 07:12:56', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(46, 44, 'LLC', 'webbridge', '2024-10-07 16:46:55', '{\"llc_zip\": \"18954\", \"llc_city\": \"richboro\", \"llc_state\": \"pa\", \"agent_name\": \"webbridge\", \"agent_type\": \"individual\", \"llc_address\": \"23 yale drive\", \"agent_address\": \"23 yale drive richboro pa 18954\", \"organizer_name\": \"test\", \"managers_members\": \"2\", \"management_method\": \"member_managed\", \"organizer_address\": \"test\", \"purpose_statement\": \"this is a test\"}', 'Waiting Payment', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(47, 44, 'LLC', 'llc', '2024-10-07 17:45:52', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(48, 45, 'LLC', 'COMPANY LLC', '2024-10-07 18:34:10', '{\"llc_zip\": \"1200\", \"llc_city\": \"Manila\", \"llc_state\": \"Manila\", \"agent_name\": \"Celso Malacas\", \"agent_type\": \"individual\", \"llc_address\": \"LLC Address\", \"agent_address\": \"Manila\", \"organizer_name\": \"company llc\", \"managers_members\": \"Judith\\r\\nJocel\\r\\nZendy\", \"management_method\": \"member_managed\", \"organizer_address\": \"manila\", \"purpose_statement\": \"purpose\"}', 'Waiting Payment', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(49, 46, 'LLC', 'company name', '2024-10-08 06:39:34', '{\"llc_zip\": \"112\", \"llc_city\": \"manila\", \"llc_state\": \"manila\", \"agent_name\": \"celso\", \"agent_type\": \"individual\", \"llc_address\": \"manila\", \"agent_address\": \"manila\", \"organizer_name\": \"llc organization\", \"managers_members\": \"judith\", \"management_method\": \"member_managed\", \"organizer_address\": \"address\", \"purpose_statement\": \"purpose of statement\"}', 'Waiting Payment', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(50, 46, 'Corporation', 'company name', '2024-10-08 06:45:42', '{\"agent_name\": \"agent name\", \"agent_type\": \"individual\", \"agent_address\": \"address\", \"corporate_zip\": \"123\", \"corporate_city\": \"city\", \"corporate_state\": \"state\", \"corporate_address\": \"corporate\", \"incorporator_name\": \"name\", \"purpose_statement\": \"purpose\", \"shares_authorized\": \"3\", \"incorporator_address\": \"address\"}', 'Waiting Payment', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(51, 46, 'LLC', 'EIN NAME', '2024-10-08 14:59:49', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(52, 46, 'LLC', 'EIN NAME', '2024-10-08 14:59:59', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(53, 46, 'LLC', 'LLC NAME', '2024-10-08 15:08:14', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(54, 46, 'LLC', 'LLC', '2024-10-08 18:57:14', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(55, 46, 'LLC', 'name', '2024-10-08 20:20:18', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(56, 46, 'LLC', 'NAME', '2024-10-09 09:38:03', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(57, 46, 'Corporation', 'name', '2024-10-09 11:25:31', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(58, 46, 'EIN', 'NAME', '2024-10-09 11:26:56', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(59, 46, 'Corporation', 'CORPORATION NAME', '2024-10-09 12:01:33', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(60, 46, 'Professional Corporation', 'PROFESSIONAL NAME', '2024-10-09 12:09:22', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(61, 46, 'LLC', 'LLC NAME', '2024-10-10 11:04:49', '{\"llc_zip\": \"2334\", \"llc_city\": \"CITY\", \"llc_state\": \"STATE\", \"agent_name\": \"AGENT NAME\", \"agent_type\": \"individual\", \"llc_address\": \"ADDRESS\", \"agent_address\": \"ADDRESS\", \"organizer_name\": \"NAME\", \"managers_members\": \"JUDITH\", \"management_method\": \"member_managed\", \"organizer_address\": \"ADDRESS\", \"purpose_statement\": \"PURPOSE\"}', 'Waiting Payment', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(62, 46, 'LLC', 'NAME', '2024-10-10 11:12:08', '{\"llc_zip\": \"123\", \"llc_city\": \"CITY\", \"llc_state\": \"STATE1\", \"agent_name\": \"AGENT\", \"agent_type\": \"individual\", \"llc_address\": \"ADDRESS\", \"agent_address\": \"ADDRESS\", \"organizer_name\": \"NAME\", \"managers_members\": \"NAMES\", \"management_method\": \"member_managed\", \"organizer_address\": \"ADDRESS\", \"purpose_statement\": \"ASDFASDFASDF\"}', 'Waiting Payment', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(63, 46, 'Professional Corporation', 'NAME', '2024-10-10 12:36:00', '{\"agent_name\": \"AGENT\", \"agent_type\": \"individual\", \"agent_address\": \"ADDRESS\", \"corporate_zip\": \"123\", \"corporate_city\": \"CIITY\", \"corporate_state\": \"STATE\", \"corporate_address\": \"ADDRESS\", \"incorporator_name\": \"NAME\", \"purpose_statement\": \"PURPSOE\", \"shares_authorized\": \"3000\", \"incorporator_address\": \"ADDRESS\"}', 'Waiting Payment', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(64, 46, 'LLC', 'START', '2024-10-10 12:40:13', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(65, 46, 'LLC', 'NAME', '2024-10-10 17:01:47', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(66, 46, 'LLC', 'company name', '2024-10-12 14:10:26', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(67, 46, 'LLC', 'company name', '2024-10-12 14:10:46', '[]', 'Incomplete', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL),
(68, 46, 'entity-type', '', '2024-10-13 20:21:30', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 0, 0, '', NULL),
(69, 46, 'llc', '', '2024-10-13 20:22:33', 'null', 'Incomplete', '', 'firstname', 'lastname', '+63333223', 'celso@gmail.com', 'address', 'Arizona', 'city', '123', 'Alaska', '2024-10-17', 'address', 'Arizona', 'city', '123', 0, 0, '3334334', NULL),
(70, 46, 'llc', '', '2024-10-13 20:23:15', 'null', 'Incomplete', '', 'firstname', 'lastname', '+63333223', 'celso@gmail.com', 'address', 'Arizona', 'city', '123', 'Alaska', '2024-10-17', 'address', 'Arizona', 'city', '123', 1, 1, '3334334', NULL),
(71, 46, 'llc', '', '2024-10-13 20:23:58', 'null', 'Incomplete', '', 'firstname', 'lastname', '+63333223', 'celso@gmail.com', 'address', 'Arizona', 'city', '123', 'Alaska', '2024-10-17', 'address', 'Arizona', 'city', '123', 1, 1, '3334334', NULL),
(72, 46, 'llc', '', '2024-10-13 20:24:46', 'null', 'Incomplete', '', 'firstname', 'lastname', '+63333223', 'celso@gmail.com', 'address', 'Arizona', 'city', '123', 'Alaska', '2024-10-17', 'address', 'Arizona', 'city', '123', 1, 1, '3334334', NULL),
(73, 46, 'entity-type', '', '2024-10-13 20:26:50', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(74, 46, 'corporation', '', '2024-10-13 20:27:41', 'null', 'Incomplete', '', 'celso', 'malacas', '+3333', 'celso@gmail.com', 'address', 'Colorado', 'city', '2333', 'California', '2024-10-16', 'address', 'Colorado', 'city', '2333', 1, 0, '', NULL),
(75, 46, 'corporation', '', '2024-10-13 20:27:51', 'null', 'Incomplete', '', 'celso', 'malacas', '+3333', 'celso@gmail.com', 'address', 'Colorado', 'city', '2333', 'California', '2024-10-16', 'address', 'Colorado', 'city', '2333', 1, 0, 'asdfasfasdfasdfasdf', NULL),
(76, 46, 'corporation', '', '2024-10-13 20:28:15', 'null', 'Incomplete', '', 'celso', 'malacas', '+3333', 'celso@gmail.com', 'address', 'Colorado', 'city', '2333', 'California', '2024-10-16', 'address', 'Colorado', 'city', '2333', 0, 1, 'asdfasfasdfasdfasdf', NULL),
(77, 46, 'entity-type', '', '2024-10-14 16:44:13', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(78, 46, 'entity-type', '', '2024-10-14 16:52:07', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(79, 46, 'entity-type', '', '2024-10-14 16:52:47', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(80, 46, 'entity-type', '', '2024-10-14 16:56:43', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(81, 46, 'entity-type', '', '2024-10-14 16:59:29', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(82, 46, 'entity-type', '', '2024-10-14 17:00:50', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(83, 46, 'entity-type', '', '2024-10-14 17:02:58', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(84, 46, 'entity-type', '', '2024-10-14 17:05:07', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(85, 46, 'entity-type', '', '2024-10-14 17:05:52', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(86, 46, 'entity-type', '', '2024-10-14 17:08:25', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(87, 46, 'entity-type', '', '2024-10-14 17:09:27', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(88, 46, 'entity-type', '', '2024-10-14 22:09:38', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(89, 46, 'entity-type', '', '2024-10-14 22:10:18', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(90, 46, 'entity-type', '', '2024-10-14 22:10:25', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(91, 46, 'entity-type', '', '2024-10-14 22:11:04', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(92, 46, 'entity-type', '', '2024-10-14 22:11:47', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(93, 46, 'entity-type', '', '2024-10-14 22:17:28', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(94, 46, 'entity-type', '', '2024-10-14 22:18:07', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(95, 46, 'entity-type', '', '2024-10-14 22:20:56', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(96, 46, 'entity-type', '', '2024-10-14 22:21:22', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(97, 46, 'entity-type', '', '2024-10-14 22:23:03', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(98, 46, 'entity-type', '', '2024-10-14 22:23:43', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(99, 46, 'entity-type', '', '2024-10-14 22:24:30', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(100, 46, 'entity-type', '', '2024-10-14 22:25:37', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(101, 46, 'entity-type', '', '2024-10-14 22:26:22', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(102, 46, 'entity-type', '', '2024-10-14 22:26:53', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(103, 46, 'entity-type', '', '2024-10-14 22:27:25', 'null', 'Incomplete', '', '', '', '', '', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(104, 46, 'entity-type', '', '2024-10-14 22:28:03', 'null', 'Incomplete', '', 'Celso', 'Malacas', '', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(105, 46, 'entity-type', '', '2024-10-14 22:28:53', 'null', 'Incomplete', '', 'Celso', 'Malacas', '', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(106, 46, 'entity-type', '', '2024-10-14 22:31:25', 'null', 'Incomplete', '', 'celso', 'malacas', '', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(107, 46, 'entity-type', '', '2024-10-14 22:32:32', 'null', 'Incomplete', '', 'celso', 'malacas', '', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '', NULL),
(108, 46, 'entity-type', '', '2024-10-14 22:39:32', 'null', 'Incomplete', '', 'CELSO', 'MALACAS', '3333', 'CELSOMALACASJR@GMAIL.COM', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '12334', NULL),
(109, 46, 'entity-type', '', '2024-10-14 22:43:47', 'null', 'Incomplete', '', 'celso', 'malacas', '343434', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '123343', NULL),
(110, 46, 'entity-type', '', '2024-10-14 22:44:52', 'null', 'Incomplete', '', 'celso', 'malacas', '3333', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '12333', NULL),
(111, 46, 'entity-type', '', '2024-10-14 22:49:02', 'null', 'Incomplete', '', 'CELSO', 'MALACAS', '33333', 'CELSOMALACASJR@GMAIL.COM', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '123334', NULL),
(112, 46, 'entity-type', '', '2024-10-14 22:50:31', 'null', 'Incomplete', '', 'celso', 'malacas', '3333', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '1233', NULL),
(113, 46, 'entity-type', '', '2024-10-14 22:52:26', 'null', 'Incomplete', '', 'celso', 'malacas', '2333', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '12334', NULL),
(114, 46, 'entity-type', '', '2024-10-14 22:53:18', 'null', 'Incomplete', '', 'celso', 'malacas', '12333', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '12333', NULL),
(115, 46, 'entity-type', '', '2024-10-14 22:55:13', 'null', 'Incomplete', '', 'celso', 'malacas', '333312', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '1233', NULL),
(116, 46, 'entity-type', '', '2024-10-14 22:56:55', 'null', 'Incomplete', '', 'celso', 'malacas', '3333', 'celsomalacasjr@gmail.com', '', '', '', '', '', '0000-00-00', '', '', '', '', 1, 0, '12333', NULL),
(117, 46, 'Limited Liability Company (LLC)', 'name', '2024-10-16 12:34:48', 'null', 'Incomplete', '', 'celso', 'malacas', 'phone', 'celso@gmail.com', 'address', 'Arkansas', 'city', '123', 'Delaware', '2024-10-16', 'address', 'Arkansas', 'city', '123', 0, 0, '1234', NULL),
(118, 46, 'Limited Liability Company (LLC)', 'name', '2024-10-16 13:47:34', 'null', 'Incomplete', '', 'celso', 'malacas', 'phone', 'celso@gmail.com', 'address', 'Arkansas', 'city', '123', 'Delaware', '2024-10-16', 'address', 'Arkansas', 'city', '123', 0, 0, '1234', NULL),
(119, 46, 'Limited Liability Company (LLC)', 'llc name', '2024-10-16 14:02:56', 'null', 'Incomplete', '', 'celso', 'malacas', 'xxxx', 'celso@gmail.com', 'address', 'Delaware', 'city', '2333', 'Arkansas', '2024-10-17', 'address', 'Delaware', 'city', '2333', 0, 0, '1233456667', NULL),
(120, 46, 'Limited Liability Company (LLC)', 'Name', '2024-10-16 14:08:37', 'null', 'Incomplete', '', 'celso', 'malacas', '3333', 'celso@gmail.com', 'address', 'California', 'city', '50210', 'California', '2024-10-15', 'address', 'California', 'city', '50210', 0, 0, '12345', NULL),
(121, 46, 'Limited Liability Company (LLC)', 'Name', '2024-10-16 15:58:14', 'null', 'Incomplete', '', 'celso', 'malacas', '3333', 'celso@gmail.com', 'address', 'California', 'city', '50210', 'California', '2024-10-15', 'address', 'California', 'city', '50210', 0, 0, '12345', 'EIN');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
