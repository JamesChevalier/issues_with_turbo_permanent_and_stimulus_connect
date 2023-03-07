require "test_helper"

class PermanentPresentControllerTest < ActionDispatch::IntegrationTest
  test "should get yes" do
    get permanent_present_yes_url
    assert_response :success
  end

  test "should get no" do
    get permanent_present_no_url
    assert_response :success
  end
end
