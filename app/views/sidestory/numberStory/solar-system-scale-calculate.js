<SCRIPT LANGUAGE="JavaScript">

<!-- hide this script tag's contents from old browsers

function computesize(form)
{
var a = form.sun.value;
var b = form.sun_size_mm.value;

// Check to see if both inch and mm boxes are filled in warn if so and stop
if ( a != 0 && b != 0 )
	alert(	"_______________________________________\n\n"	+
			"You\'ve filled in both the english and metric\n" +
			"                    boxes.\n" +
			"_______________________________________\n\n" +
			" Please clear one of these boxes and hit the\n" +
			"              \'CALCULATE\' button again."
		)
else  
{
//	scale factor entered in inches
	if ( a != 0 && b == 0 ) {
	scale_factor = a / 1391900;
	form.sun_size_mm.value = int_zero( a * 25.4 * 10 ) / 10;
}

//	scale factor entered in millimeters
if ( b != 0 && a == 0 ) {
	scale_factor = (b / 25.4) / 1391900;
	form.sun.value = int_zero( ( b / 25.4 ) * 10 ) / 10;
}

	form.merc_size.value = int_zero(scale_factor * 4866 * 10000 ) / 10000;
	form.merc_size_mm.value = int_zero(scale_factor * 4866 * 25.4 * 10 ) / 10;
	form.merc_dist_feet.value = int_zero(scale_factor * 57950000 / 12 );
	form.merc_dist_inch.value = int_zero((scale_factor * 57950000) % 12 * 100) /100;
	form.merc_dist_meter.value = int_zero(scale_factor * 57950000 * .0254 *1000  ) / 1000;

	form.venus_size.value = int_zero(scale_factor * 12106 * 10000 ) / 10000;
	form.venus_size_mm.value = int_zero(scale_factor * 12106 * 25.4 * 10 ) / 10;
	form.venus_dist_feet.value = int_zero(scale_factor * 108110000 / 12 ,10 );
	form.venus_dist_inch.value = int_zero((scale_factor * 108110000) % 12 * 100) /100;
	form.venus_dist_meter.value = int_zero(scale_factor * 108110000 * .0254 *1000 ) / 1000;

	form.earth_size.value = int_zero(scale_factor * 12742 * 10000 ) / 10000;
	form.earth_size_mm.value = int_zero(scale_factor * 12742 * 25.4 * 10 ) / 10;
	form.earth_dist_feet.value = int_zero(scale_factor * 149570000 / 12 );
	form.earth_dist_inch.value = int_zero((scale_factor * 149570000) % 12 * 100) /100;
	form.earth_dist_meter.value = int_zero(scale_factor * 149570000 * .0254 *1000 ) / 1000;

	form.mars_size.value = int_zero(scale_factor * 6760 * 10000 ) / 10000;
	form.mars_size_mm.value = int_zero(scale_factor * 6760 * 25.4 * 10 ) / 10;
	form.mars_dist_feet.value = int_zero(scale_factor * 227840000 / 12 );
	form.mars_dist_inch.value = int_zero((scale_factor * 227840000) % 12 * 100) /100;
	form.mars_dist_meter.value = int_zero(scale_factor * 227840000 * .0254 *1000 ) / 1000;

	form.jupiter_size.value = int_zero(scale_factor * 142984 * 10000 ) / 10000;
	form.jupiter_size_mm.value = int_zero(scale_factor * 142984 * 25.4 * 10 ) / 10;
	form.jupiter_dist_feet.value = int_zero(scale_factor * 778140000 / 12 );
	form.jupiter_dist_inch.value = int_zero((scale_factor * 778140000) % 12 * 100) /100;
	form.jupiter_dist_meter.value = int_zero(scale_factor * 778140000 * .0254 * 1000 ) / 1000;

	form.saturn_size.value = int_zero(scale_factor * 116438 * 10000 ) / 10000;
	form.saturn_size_mm.value = int_zero(scale_factor * 116438 * 25.4 * 10 ) / 10;
	form.saturn_dist_feet.value = int_zero(scale_factor * 1427000000 / 12 );
	form.saturn_dist_inch.value = int_zero((scale_factor * 1427000000 ) % 12 * 100) /100;
	form.saturn_dist_meter.value = int_zero(scale_factor * 1427000000 * .0254 * 1000 ) / 1000;

	form.uranus_size.value = int_zero(scale_factor * 46940 * 10000 ) / 10000;
	form.uranus_size_mm.value = int_zero(scale_factor * 46940 * 25.4 * 10 ) / 10;
	form.uranus_dist_feet.value = int_zero(scale_factor * 2870300000 / 12 );
	form.uranus_dist_inch.value = int_zero((scale_factor * 2870300000 ) % 12 * 100) /100;
	form.uranus_dist_meter.value = int_zero(scale_factor * 2870300000 * .0254 * 1000 ) / 1000;

	form.neptune_size.value = int_zero(scale_factor * 45432 * 10000 ) / 10000;
	form.neptune_size_mm.value = int_zero(scale_factor * 45432 * 25.4 * 10 ) / 10;
	form.neptune_dist_feet.value = int_zero(scale_factor * 4499900000 / 12 );
	form.neptune_dist_inch.value = int_zero((scale_factor * 4499900000 ) % 12 * 100) /100;
	form.neptune_dist_meter.value = int_zero(scale_factor * 4499900000 * .0254 * 1000 ) / 1000;

	form.pluto_size.value = int_zero(scale_factor * 2274 * 1000 ) / 1000;
	form.pluto_size_mm.value = int_zero(scale_factor * 2274 * 25.4 * 10 ) / 10;
	form.pluto_dist_feet.value = int_zero(scale_factor * 5913000000 / 12 );
	form.pluto_dist_inch.value = int_zero((scale_factor * 5913000000) % 12 * 100) /100;
	form.pluto_dist_meter.value = int_zero(scale_factor * 5913000000 * .0254 * 1000 ) / 1000;

	form.speed_of_light.value = int_zero(scale_factor * 299792 * 1000 ) / 1000;
	form.speed_of_light_mm.value = int_zero(scale_factor * 299792 * 25.4 * 10 ) / 10;

	form.light_year_mi.value = int_zero(scale_factor * 9.46051E+12 / 12 / 5280 * 10 ) / 10;
	form.light_year_km.value = int_zero(scale_factor * 9.46051E+12 * .0000254 * 10 ) / 10;

	form.alpha_centauri_mi.value = int_zero(scale_factor * 4.03964E+13 / 12 / 5280 * 10 ) / 10;
	form.alpha_centauri_km.value = int_zero(scale_factor * 4.03964E+13 * .0000254 * 10 ) / 10;

	form.sirius_mi.value = int_zero(scale_factor * 8.17388E+13 / 12 / 5280 * 10 ) / 10;
	form.sirius_km.value = int_zero(scale_factor * 8.17388E+13 * .0000254 * 10 ) / 10;

	form.deneb_mi.value = int_zero(scale_factor * 1.32636E+16 / 12 / 5280 * 10 ) / 10;
	form.deneb_km.value = int_zero(scale_factor * 1.32636E+16 * .0000254 * 10 ) / 10;

	form.galactic_center_mi.value = int_zero(scale_factor * 2.62151E+17 / 12 / 5280 * 10 ) / 10;
	form.galactic_center_km.value = int_zero(scale_factor * 2.62151E+17 * .0000254 * 10 ) / 10;

	form.hottest_star_feet.value = int_zero(scale_factor * 12527100 / 12 *100 ) /100;
	form.hottest_star_meter.value = int_zero(scale_factor * 12527100 * .0254 *100 ) /100;

	form.coolest_star_inch.value = int_zero((scale_factor * 222704 ) * 100) / 100;
	form.coolest_star_cm.value = int_zero(scale_factor * 222704 * 2.54 * 100 ) / 100;

	form.red_giant_feet.value = int_zero(scale_factor * 521962500 / 12 * 10 ) / 10;
	form.red_giant_meter.value = int_zero(scale_factor * 521962500 * .0254 * 10 ) / 10;

	form.white_dwarf_inch.value = int_zero((scale_factor * 13919 ) * 10000 ) / 10000;
	form.white_dwarf_mm.value = int_zero(scale_factor * 13919 * 25.4 * 1000 ) / 1000;

	form.neutron_star_inch.value = int_zero((scale_factor * 20 ) * 1000000 ) / 1000000;
	form.neutron_starr_mm.value = int_zero(scale_factor * 20 * 25.4 * 100000 ) / 100000;
}
}
// Function to return 0 if result is <1
function int_zero(x)
{
	if ( x < 1 )
		return 0 ;
	else
		return parseInt( x ,10 );
}
<!-- done hiding from old browsers -->

</SCRIPT>
