import { useEffect, useState } from 'react';

function useVietnamProvinces() {
  const [provinces, setProvinces] = useState({});
  const [districts, setDistricts] = useState([]);
  const [formData, setFormData] = useState({
    province: '',
    district: '',
  });

  useEffect(() => {
    const fetchProvinces = async () => {
      const dataProvince = await (
        await fetch('https://provinces.open-api.vn/api/?depth=3')
      ).json();
      setProvinces(dataProvince);
    };
    fetchProvinces();
  }, []);

  const _handleChangeAddress = e => {
    let provinceName = e.target.value;
    setFormData({
      ...formData,
      province: provinceName,
    });
    let districtsObj = Object.values(provinces).filter(
      item => item.name === provinceName,
    )[0].districts;
    setDistricts(Object.values(districtsObj));
  };

  const _handleDistrictChange = e => {
    let districtName = e.target.value;
    setFormData({
      ...formData,
      district: districtName,
    });
  };

  return {
    formData,
    districts,
    provinces,
    _handleDistrictChange,
    _handleChangeAddress,
  };
}

export default useVietnamProvinces;
