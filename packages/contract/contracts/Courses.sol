// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.7.3;

contract Courses{
    struct Course{
        string videoLink;
        string markdownContent;
        address createrAddress;
    }

    Course[] public coursesCreated;

    constructor(){}

    function createCourse(string memory _videoLink, string memory _markdownContent) public returns (uint256 id) {
        uint256 courseId = coursesCreated.length + 1;

        Course memory newCourse = Course({
            videoLink: _videoLink,
            markdownContent: _markdownContent,
            createrAddress: msg.sender
        });

        coursesCreated.push(newCourse);

        return courseId;
    }

    function getCourse(uint256 courseId) public view returns (Course memory){
        return coursesCreated[courseId];
    }

    function listCourses() public view returns(Course[] memory){
        return coursesCreated;
    }

    function fetchPage(uint256 cursor, uint256 howMany)
    public
    view
    returns (Course[] memory values, uint256 newCursor)
    {
        uint256 length = howMany;
        if (length > coursesCreated.length - cursor) {
            length = coursesCreated.length - cursor;
        }

        values = new Course[](length);
        for (uint256 i = 0; i < length; i++) {
            values[i] = coursesCreated[cursor + i];
        }

        return (values, cursor + length);
    }
}